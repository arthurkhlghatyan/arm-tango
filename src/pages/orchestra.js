import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Modal from 'react-bootstrap/Modal';
import biographies from '../data/biographies';
import OrchestraImg from '../images/orchestra.jpg';
import FernandoSanchezImg from '../images/fernando-sanchez.jpg';
import HugoSatorreImg from '../images/hugo-satorre.jpg';

// Slider images
import PhilarmonicOrchestra1 from '../images/slides/philarmonic-orchestra/1.jpg';
import PhilarmonicOrchestra2 from '../images/slides/philarmonic-orchestra/2.jpg';
import PhilarmonicOrchestra3 from '../images/slides/philarmonic-orchestra/3.jpg';

import HugoSatorre1 from '../images/slides/hugo-satorre/1.jpg';
import HugoSatorre2 from '../images/slides/hugo-satorre/2.jpg';
import HugoSatorre3 from '../images/slides/hugo-satorre/3.jpg';
import HugoSatorre4 from '../images/slides/hugo-satorre/4.jpg';

import FernandoSanchez1 from '../images/slides/fernando-sanchez/1.jpg';
import FernandoSanchez2 from '../images/slides/fernando-sanchez/2.jpg';
import FernandoSanchez3 from '../images/slides/fernando-sanchez/3.jpg';
import FernandoSanchez4 from '../images/slides/fernando-sanchez/4.jpg';

class Orchestra extends Component {
  state = {
    show: false,
    showGallery: false,
    musicianName: '',
    galleryMusicianName: 'philarmonic-orchestra',
  };

  images = {
    'philarmonic-orchestra': [
      PhilarmonicOrchestra1,
      PhilarmonicOrchestra2,
      PhilarmonicOrchestra3,
    ],
    'hugo-satorre': [
      HugoSatorre1,
      HugoSatorre2,
      HugoSatorre3,
      HugoSatorre4,
    ],
    'fernando-sanchez': [
      FernandoSanchez1,
      FernandoSanchez2,
      FernandoSanchez3,
      FernandoSanchez4,
    ]
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

  openGalleryModal = (galleryMusicianName) => {
    this.setState({
      showGallery: true,
      galleryMusicianName,
    });
  };

  openReadMoreModal = (musicianName) => {
    this.setState({
      show: true,
      musicianName,
    });
  };

  render() {
    const {
      show,
      musicianName,
      showGallery,
      galleryMusicianName,
    } = this.state;

    return (
      <Layout>
        <SEO
          title="Orchestra"
          keywords={[`tango`, `#ArmTangoFest2019`, `orchestra`]}
        />
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Orchestra</h1>
            <p className="lead text-muted">
              See orchestra
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
                    src={OrchestraImg}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <strong>
                        Armenian National Philharmonic Orchestra
                      </strong>
                    </p>
                    <p className="card-text">
                      The Armenian National Philharmonic Orchestra (ANPO) was founded in 1925 by Arshak Adamyan and Alexander Spendiaryan. For many years it has been considered as one of the leading orchestras of the former Soviet Union.
                      Today, it is a national center of the professional orchestral music in Armenia.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          onClick={this.openReadMoreModal.bind(this, 'armenian-national-philharmonic-orchestra')}
                          type="button"
                          className="btn btn-sm btn-outline-secondary">
                          Read More
                        </button>
                        <button
                          onClick={this.openGalleryModal.bind(this, 'philarmonic-orchestra')}
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
                    src={HugoSatorreImg}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <strong>
                        Hugo Satorre
                      </strong>
                    </p>
                    <p className="card-text">
                      Hugo Satorre has performed in some of the most prestigious theatre and concert halls throughout the world. Some worth noting are: the Sydney Opera House (Australia), The Esplanade (Singapore), the Walt Disney Hall (Los Angeles), el Teatro Colón (Buenos Aires), the Shanghai Oriental Art Center (Shanghai).
                      In March 2012 he accompanied tenor Placido Domingo on a stage set up in the widest avenue in Buenos Aires, 9 de Julio Av., in front of 120,000 people.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          onClick={this.openReadMoreModal.bind(this, 'hugo-satorre')}
                          type="button"
                          className="btn btn-sm btn-outline-secondary">
                          Read More
                        </button>
                        <button
                          onClick={this.openGalleryModal.bind(this, 'hugo-satorre')}
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
                    src={FernandoSanchezImg}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <strong>
                        Fernando Sanchez
                      </strong>
                    </p>
                    <p className="card-text">
                      Fernando Sánchez was born in Buenos Aires in 1980 and began his guitar studies with private teachers.
                      In 2008, he graduated from Conservatorio Superior de Música “Astor Piazzolla” of  Buenos Aires as a Guitar and Music Teacher.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          onClick={this.openReadMoreModal.bind(this, 'fernando-sanchez')}
                          type="button"
                          className="btn btn-sm btn-outline-secondary">
                          Read More
                        </button>
                        <button
                          onClick={this.openGalleryModal.bind(this, 'fernando-sanchez')}
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
          <Modal.Body dangerouslySetInnerHTML={{ __html: biographies[musicianName] }} />
        </Modal>
        <Modal show={showGallery} onHide={this.handleGalleryClose}>
          <Modal.Header closeButton>
            <Modal.Title>Gallery</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="gallery" id="gallery">
              {this.images[galleryMusicianName].map((item, index) => {
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

export default Orchestra;
