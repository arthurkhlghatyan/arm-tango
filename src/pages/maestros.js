import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Modal from 'react-bootstrap/Modal';
import YulianaBasmajyanImg from '../images/yuliana-basmajyan.jpg';
import RonenDoritImg from '../images/ronen-dorit.jpg';
import DominicBridgeImg from '../images/dominic-bridge.jpg';
import TatianaPavel from '../images/tatiana-pavel.jpg';
import biographies from '../data/biographies';

// Slider images
import YulianaBasmajyan1 from '../images/slides/yuliana-basmajyan/1.jpg';
import YulianaBasmajyan2 from '../images/slides/yuliana-basmajyan/2.jpg';
import YulianaBasmajyan3 from '../images/slides/yuliana-basmajyan/3.jpg';
import YulianaBasmajyan4 from '../images/slides/yuliana-basmajyan/4.jpg';
import YulianaBasmajyan5 from '../images/slides/yuliana-basmajyan/5.jpg';

// Slider images
import DominicBridge1 from '../images/slides/dominic-bridge/1.jpg';
import DominicBridge2 from '../images/slides/dominic-bridge/2.jpg';
import DominicBridge3 from '../images/slides/dominic-bridge/3.jpg';
import DominicBridge4 from '../images/slides/dominic-bridge/4.jpg';
import DominicBridge5 from '../images/slides/dominic-bridge/5.jpg';

import RonenDorit1 from '../images/slides/ronen-dorit/1.jpg';
import RonenDorit2 from '../images/slides/ronen-dorit/2.jpg';
import RonenDorit3 from '../images/slides/ronen-dorit/3.jpg';
import RonenDorit4 from '../images/slides/ronen-dorit/4.jpg';
import RonenDorit5 from '../images/slides/ronen-dorit/5.jpg';
import RonenDorit6 from '../images/slides/ronen-dorit/6.jpg';

import TatianaPavel1 from '../images/slides/tatiana-pavel/1.jpg';
import TatianaPavel2 from '../images/slides/tatiana-pavel/2.jpg';
import TatianaPavel3 from '../images/slides/tatiana-pavel/3.jpg';

class Maestros extends Component {
  state = {
    show: false,
    showVideoModal: false,
    showGallery: false,
    maestroName: '',
    videoMaestroName: 'yuliana-basmajyan',
    galleryMaestroName: 'yuliana-basmajyan',
  };

  images = {
    'yuliana-basmajyan': [
      YulianaBasmajyan1,
      YulianaBasmajyan2,
      YulianaBasmajyan3,
      YulianaBasmajyan4,
      YulianaBasmajyan5,
    ],
    'dominic-bridge': [
      DominicBridge1,
      DominicBridge2,
      DominicBridge3,
      DominicBridge4,
      DominicBridge5,
    ],
    'ronen-dorit': [
      RonenDorit1,
      RonenDorit2,
      RonenDorit3,
      RonenDorit4,
      RonenDorit5,
      RonenDorit6,
    ],
    'tatiana-pavel': [
      TatianaPavel1,
      TatianaPavel2,
      TatianaPavel3,
    ],
  };

  videos = {
    'yuliana-basmajyan': [
      'HDJYm2okrbo',
      'vi1ZDL8aBMI',
    ],
    'dominic-bridge': [
      'XOHGiT-xaBM',
      '1cdtb-yrZxY',
      'yanTqfvvUsw',
    ],
    'ronen-&-dorit': [
      'QmWUVDlK1wk',
      'ABsTgrSARJQ',
    ],
    'tatiana-gordinscaia-&-pavel-lozan': [
      'OytWpIZnYq8',
    ],
  };

  handleClose = () => {
    this.setState({
      show: false,
      maestroName: '',
    });
  };

  handleVideoModalClose = () => {
    this.setState({
      showVideoModal: false,
    });
  };

  handleGalleryClose = () => {
    this.setState({
      showGallery: false,
    });
  };

  openReadMoreModal = (maestroName) => {
    this.setState({
      show: true,
      maestroName,
    });
  };

  openVideoModal = (videoMaestroName) => {
    this.setState({
      showVideoModal: true,
      videoMaestroName,
    });
  };

  openGalleryModal = (galleryMaestroName) => {
    this.setState({
      showGallery: true,
      galleryMaestroName,
    });
  };

  renderVideos() {
    const { videoMaestroName } = this.state;

    if (videoMaestroName === '') {
      return null;
    }

    const iframes = this.videos[videoMaestroName].map((item, index) => {
      return (
        <iframe
          key={index}
          width="100%"
          height="345"
          src={`https://www.youtube.com/embed/${item}`} />
      );
    });

    return iframes;
  }

  render() {
    const {
      show,
      showVideoModal,
      showGallery,
      maestroName,
      videoMaestroName,
      galleryMaestroName,
    } = this.state;

    return (
      <Layout>
        <SEO
          title="Maestros"
          keywords={[`tango`, `#ArmTangoFest2019`, `maestros`]}
        />
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Maestros</h1>
            <p className="lead text-muted">
              Famous tango maestros are going to share, teach and dance during Festival.
            </p>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-4 box-shadow">
                  <img
                    className="card-img-top"
                    alt="Thumbnail [100%x225]"
                    style={{ height: 225, width: '100%', display: 'block' }}
                    data-holder-rendered="true"
                    src={YulianaBasmajyanImg}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <strong>
                        Yuliana Basmajyan
                      </strong>
                    </p>
                    <p className="card-text">
                      Born and raised in Armenia, Yuliana Basmajyan immigrated to the US in her early adolescent years.
                      For many years she tested her skills in different dance forms including modern, jazz, flamenco, and extensive training in Salsa.
                      After several years of Latin dancing she discovered her true calling, a dance that truly inspired and challenged her…Tango.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={this.openReadMoreModal.bind(this, 'yuliana-basmajyan')}>
                          Read More
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={this.openVideoModal.bind(this, 'yuliana-basmajyan')}>
                          Watch Video
                        </button>
                        <button
                          onClick={this.openGalleryModal.bind(this, 'yuliana-basmajyan')}
                          type="button"
                          className="btn btn-sm btn-outline-secondary">
                          See Photos
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card mb-4 box-shadow">
                  <img
                    className="card-img-top"
                    alt="Thumbnail [100%x225]"
                    style={{ height: 225, width: '100%', display: 'block' }}
                    data-holder-rendered="true"
                    src={DominicBridgeImg}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <strong>
                        Dominic Bridge
                      </strong>
                    </p>
                    <p className="card-text">
                      Dominic has been working in tango full-time since 2007.
                      He has taught and performed in international tango festivals, cultural events, and offered workshops in over a dozen countries around the world, including Buenos Aires.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          onClick={this.openReadMoreModal.bind(this, 'dominic-bridge')}
                          type="button"
                          className="btn btn-sm btn-outline-secondary">
                          Read More
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={this.openVideoModal.bind(this, 'dominic-bridge')}>
                          Watch Video
                        </button>
                        <button
                          onClick={this.openGalleryModal.bind(this, 'dominic-bridge')}
                          type="button"
                          className="btn btn-sm btn-outline-secondary">
                          See Photos
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card mb-4 box-shadow">
                  <img
                    className="card-img-top"
                    alt="Thumbnail [100%x225]"
                    style={{ height: 225, width: '100%', display: 'block' }}
                    data-holder-rendered="true"
                    src={RonenDoritImg}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <strong>
                        Ronen & Dorit  
                      </strong>
                    </p>
                    <p className="card-text">
                      Dance the emotion - one of the main characteristics of Dorit and Ronen's  tango, combined with very high level of technique and precision. 
                      A strong emphasis on embrace, deep and real connection and uncompromised passion create their special and unique art of tango.
                      Within this ambient they teach their tango classes with a nice combination of excellent didactic skills and the feeling of the love of the dance and the never ending joy of it.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          onClick={this.openReadMoreModal.bind(this, 'ronen-&-dorit')}
                          type="button"
                          className="btn btn-sm btn-outline-secondary">
                          Read More
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={this.openVideoModal.bind(this, 'ronen-&-dorit')}>
                          Watch Video
                        </button>
                        <button
                          onClick={this.openGalleryModal.bind(this, 'ronen-dorit')}
                          type="button"
                          className="btn btn-sm btn-outline-secondary">
                          See Photos
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card mb-4 box-shadow">
                  <img
                    className="card-img-top"
                    alt="Thumbnail [100%x225]"
                    style={{ height: 225, width: '100%', display: 'block' }}
                    data-holder-rendered="true"
                    src={TatianaPavel}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <strong>
                        Tatiana Gordinscaia & Pavel Lozan
                      </strong>
                    </p>
                    <p className="card-text">
                      Tatiana & Pavel dancing together since year 2013.
                      Tatiana founded first school of Argentinean tango in Moldova in 2010, and also organized 3 big festivals and 3 marathons, common known as MADT.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          onClick={this.openReadMoreModal.bind(this, 'tatiana-gordinscaia-&-pavel-lozan')}
                          type="button"
                          className="btn btn-sm btn-outline-secondary">
                          Read More
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={this.openVideoModal.bind(this, 'tatiana-gordinscaia-&-pavel-lozan')}>
                          Watch Video
                        </button>
                        <button
                          onClick={this.openGalleryModal.bind(this, 'tatiana-pavel')}
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
          <Modal.Body dangerouslySetInnerHTML={{ __html: biographies[maestroName] }} />
        </Modal>
        <Modal show={showVideoModal} onHide={this.handleVideoModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Videos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.renderVideos()}
          </Modal.Body>
        </Modal>
        <Modal show={showGallery} onHide={this.handleGalleryClose}>
          <Modal.Header closeButton>
            <Modal.Title>Gallery</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="gallery" id="gallery">
              {this.images[galleryMaestroName].map((item, index) => {
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

export default Maestros;
