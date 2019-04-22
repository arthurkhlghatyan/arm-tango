import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Jumbotron from '../components/jumbotron';
import Joi from 'joi-browser';
import Alert from 'react-bootstrap/Alert';
import * as emailjs from 'emailjs-com';

const schema = Joi.object().keys({
  fullName: Joi.string().required().label('Full name'),
  country: Joi.string().required().label('Country'),
  email: Joi.string().email({ minDomainAtoms: 2 }).label('Email'),
  phoneNumber: Joi.string().required().label('Phone number'),
  message: Joi.string().required().label('Message'),
});

class ContactUs extends Component {
  state = {
    form: {
      fullName: '',
      country: '',
      email: '',
      phoneNumber: '',
      message: '',
    },
    captchaVerified: false,
    inProgress: false,
    error: false,
    success: false,
  };

  verifyCallback = () => {
    this.setState({
      captchaVerified: true,
    });
  };

  renderCaptcha = () => {
    window.grecaptcha.render('g-recaptcha', {
      'sitekey' : '6Ldu9J0UAAAAAJ39zvSWlmY6Mj7q-tCH52ipaMzZ',
      'callback' : this.verifyCallback,
    });
  };

  componentDidMount() {
    if (typeof window.grecaptcha === 'undefined') {
      setTimeout(() => {
        this.renderCaptcha();
      }, 3000);

      return;
    }

    this.renderCaptcha();
  }

  handleChange = (name, value) => {
    return (evt) => {
      const { form } = this.state;
      const { value } = evt.target;
      form[name] = value;

      this.setState({
        form,
      });
    };
  };

  handleSubmit = () => {
    const { form } = this.state;
    const { inProgress, captchaVerified } = this.state;

    if (inProgress || !captchaVerified) {
      return;
    }

    this.setState({
      inProgress: true,
    });

    Joi
      .validate(form, schema)
      .then((results) => {
        emailjs
          .send(
            'gmail',
            'uplisted',
            form,
            'user_vsPR1TroUrLfTA9TiGFcw',
          )
          .then((response) => {
            this.setState({
              error: false,
              success: true,
            });
          }, (err) => {
            this.setState({
              error: true,
              success: false,
            });
          });
      })
      .catch((error) => {
        this.setState({
          inProgress: false,
          error: true,
        });
      });
  };

  checkDisabledClass = () => {
    return this.state.inProgress ? 'disabled' : '';
  };

  onClose = () => {
    this.setState({
      error: false,
      success: false,
    });
  };

  render() {
    const { error, success } = this.state;
    const errorText = `
      Oh snap! You got an error!
      Check the form below and try again.
    `;
    const successText = 'Email is successfully sent.';
    const variant = error ? 'danger' : ( success ? 'success' : '' );
    const text = error ? errorText : ( success ? successText : '' );

    return (
      <Layout>
        <SEO
          title="Contact Us"
          keywords={[`tango`, `#ArmTangoFest2019`, `festival`]}
        />
        <Jumbotron title="Contact Us" description="Contact us if you have any questions">
          <Alert
            show={error || success}
            dismissible
            variant={variant}
            onClose={this.onClose}
          >
            <p>
              {text}
            </p>
          </Alert>
          <form>
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full name"
                      value={this.state.form.fullName}
                      onChange={this.handleChange('fullName')}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Country"
                      value={this.state.form.country}
                      onChange={this.handleChange('country')}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={this.state.form.email}
                      onChange={this.handleChange('email')}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone number"
                      value={this.state.form.phoneNumber}
                      onChange={this.handleChange('phoneNumber')}
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      className="form-control mb-3"
                      rows="4"
                      value={this.state.form.message}
                      onChange={this.handleChange('message')}
                    />
                  </div>
                  <div className="g-recaptcha" id="g-recaptcha" />
                  <button
                    type="button"
                    className={`mt-3 btn btn-lg btn-block btn-outline-primary ${this.checkDisabledClass()}`}
                    onClick={this.handleSubmit}
                    aria-disabled={this.state.inProgress}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Jumbotron>
      </Layout>
    );
  }
}

export default ContactUs;
