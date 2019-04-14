import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Lightbox from 'react-image-lightbox';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Modal from 'react-bootstrap/Modal';
import LucaLambertDj from '../images/luca-lambert-dj.jpg';
import MihranSigaherDj from '../images/mihran-sigaher.jpg';
import TatianaGordinscaya from '../images/tatiana-gordinscaya.jpg';
import biographies from '../data/biographies';

// Slider images
import LucamLambert1 from '../images/slides/luca-lambert/1.jpg';
import LucamLambert2 from '../images/slides/luca-lambert/2.jpg';
import LucamLambert3 from '../images/slides/luca-lambert/3.jpg';
import LucamLambert4 from '../images/slides/luca-lambert/4.jpg';
import LucamLambert5 from '../images/slides/luca-lambert/5.jpg';
import LucamLambert6 from '../images/slides/luca-lambert/6.jpg';

import MihranSigaher1 from '../images/slides/mihran-sigaher/1.jpg';
import MihranSigaher2 from '../images/slides/mihran-sigaher/2.jpg';
import MihranSigaher3 from '../images/slides/mihran-sigaher/3.jpg';
import MihranSigaher4 from '../images/slides/mihran-sigaher/4.jpg';

import TatianaGordinscaya1 from '../images/slides/tatiana-gordinscaya/1.jpg';
import TatianaGordinscaya2 from '../images/slides/tatiana-gordinscaya/2.jpg';

class DJS extends Component {
  state = {
    show: false,
    showGallery: false,
    djName: '',
    galleryDjName: 'luca-lamberti',
  };

  images = {
    'luca-lamberti': [
      LucamLambert1,
      LucamLambert2,
      LucamLambert3,
      LucamLambert4,
      LucamLambert5,
      LucamLambert6,
    ],
    'mihran-sigaher': [
      MihranSigaher1,
      MihranSigaher2,
      MihranSigaher3,
      MihranSigaher4,
    ],
    'tatiana-gordinscaya': [
      TatianaGordinscaya1,
      TatianaGordinscaya2,
    ],
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleGalleryClose = () => {
    this.setState({
      showGallery: false,
    });
  };

  openReadMoreModal = (djName) => {
    this.setState({
      show: true,
      djName,
    });
  };

  openGalleryModal = (galleryDjName) => {
    this.setState({
      showGallery: true,
      galleryDjName,
    });
  };

  render() {
    const { show, showGallery, djName, galleryDjName } = this.state;
    
    return (
      <Layout>
        <SEO
          title="DJs"
          keywords={[`tango`, `#ArmTangoFest2019`, `djs`]}
        />
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">DJs</h1>
            <p className="lead text-muted">
              Leading Tango DJs are going to participate.
            </p>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <img
                    className="card-img-top"
                    alt="Thumbnail [100%x225]"
                    style={{ height: 225, width: '100%', display: 'block' }}
                    data-holder-rendered="true"
                    src={LucaLambertDj}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <strong>
                        Luca Lamberti
                      </strong>
                    </p>
                    <p className="card-text">
                      Luca is a well known tango DJ, teacher, and dancer in the European tango circuit.
                      Luca has been around to Europe, middle East and Asia spreading his unique spiritual approach to tango.
                      Dancing since the year 2000 and studying with key tango world figures.
                      Luca has been the organizer of Tangocamp Italy since 2009 and a key figure in the other 3 tango camp festivals.
                      Organising also Roman holiday tango marathon in Rome.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          onClick={this.openReadMoreModal.bind(this, 'luca-lamberti')}
                          type="button"
                          className="btn btn-sm btn-outline-secondary">
                          Read More
                        </button>
                        <button
                          onClick={this.openGalleryModal.bind(this, 'luca-lamberti')}
                          type="button"
                          className="btn btn-sm btn-outline-secondary">
                          See Photos
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <img
                    className="card-img-top"
                    alt="Thumbnail [100%x225]"
                    style={{ height: 225, width: '100%', display: 'block' }}
                    data-holder-rendered="true"
                    src={MihranSigaherDj}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <strong>
                        Mihran Sigaher
                      </strong>
                    </p>
                    <p className="card-text">
                        Improved himself by gathering information about tango and tango music archives from  orchestras since 2006 his start to tango, Mihran began DJing at  2008. 
                        From 2008 to the present, he has been playing music in Turkey, Italy, Romania, Bulgaria and Greece milongas. Mihran brings tango dancers and audiences together with various orchestras by blending rhythm and melody in appropriate proportions.
                      </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          onClick={this.openReadMoreModal.bind(this, 'mihran-sigaher')}
                          type="button"
                          className="btn btn-sm btn-outline-secondary">
                          Read More
                        </button>
                        <button
                          onClick={this.openGalleryModal.bind(this, 'mihran-sigaher')}
                          type="button"
                          className="btn btn-sm btn-outline-secondary">
                          See Photos
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <img
                    className="card-img-top"
                    alt="Thumbnail [100%x225]"
                    style={{ height: 225, width: '100%', display: 'block' }}
                    data-holder-rendered="true"
                    src={TatianaGordinscaya}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <strong>
                        Tatiana Gordinscaya
                      </strong>
                    </p>
                    <p className="card-text">
                        Tatiana was started to dance argentinian tango 8 years ago and at the moment she has felt that tango is a dance of her soul she decided to found first argentinian tango school in Moldova.
                        After she visited Buenos Aires, she decided that to put music on milongas is an art, and one part of this art is to create atmosphere of small Buenos Aires at the milonga.
                      </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          onClick={this.openReadMoreModal.bind(this, 'tatiana-gordinscaya')}
                          type="button"
                          className="btn btn-sm btn-outline-secondary">
                          Read More
                        </button>
                        <button
                          onClick={this.openGalleryModal.bind(this, 'tatiana-gordinscaya')}
                          type="button"
                          className="btn btn-sm btn-outline-secondary">
                          See Photos
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Biography</Modal.Title>
          </Modal.Header>
          <Modal.Body dangerouslySetInnerHTML={{ __html: biographies[djName] }} />
        </Modal>
        <Modal show={showGallery} onHide={this.handleGalleryClose}>
          <Modal.Header closeButton>
            <Modal.Title>Gallery</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="gallery" id="gallery">
              {this.images[galleryDjName].map((item, index) => {
                return (
                  <div key={index} className="mb-3 pics animation all 2">
                    <img className="img-fluid" src={item} />
                  </div>
                );
              })}
            </div>
          </Modal.Body>
        </Modal>
      </Layout>
    );
  }
}

export default DJS;
