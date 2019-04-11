import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Modal from 'react-bootstrap/Modal';
import YulianaBasmajyanImg from '../images/yuliana-basmajyan.jpg';
import RonenDoritImg from '../images/ronen-dorit.jpg';
import DominicBridgeImg from '../images/dominic-bridge.jpg';
import TatianaPavel from '../images/tatiana-pavel.jpg';
import biographies from '../data/biographies';

class Maestros extends Component {
  state = {
    show: false,
    showVideoModal: false,
    maestroName: '',
    videoMaestroName: '',
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

    console.log(iframes);

    return iframes;
  }

  render() {
    const {
      show,
      showVideoModal,
      maestroName,
      videoMaestroName,
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
              Leading Tango Maestros are going to participate
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
                          See Videos
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">See Photos</button>
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
                          See Videos
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">See Photos</button>
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
                          See Videos
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">See Photos</button>
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
                          See Videos
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">See Photos</button>
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
      </Layout>
    );
  }
}

export default Maestros;
