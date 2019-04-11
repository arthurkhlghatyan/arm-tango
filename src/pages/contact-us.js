import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactUs = () => (
  <Layout>
    <SEO
      title="Contact Us"
      keywords={[`tango`, `#ArmTangoFest2019`, `festival`]}
    />
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Contact Us</h1>
        <p className="lead text-muted">
          Contact us if you have any questions
        </p>
        <form>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone number"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    className="form-control mb-3"
                    rows="4" />
                </div>
                <button
                  type="button"
                  className="btn btn-lg btn-block btn-outline-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
      </form>
      </div>
    </section>
  </Layout>
);

export default ContactUs;
