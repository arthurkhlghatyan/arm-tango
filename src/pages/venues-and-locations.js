import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import biographies from '../data/biographies';
import Modal from 'react-bootstrap/Modal';

// Thumbnail images
import Floor14thHotelImg from '../images/floor14th-hotel.jpg';
import TsakhkadzorComplexImg from '../images/tsakhkadzor-complex.jpg';
import OrchestraImg from '../images/orchestra.jpg';
import AraratHotelImg from '../images/ararat-hotel.jpg';

// Slides
import Floor14thHotel1 from '../images/slides/14th-floor/1.jpg';
import Floor14thHotel2 from '../images/slides/14th-floor/2.jpg';
import Floor14thHotel3 from '../images/slides/14th-floor/3.jpg';
import Floor14thHotel4 from '../images/slides/14th-floor/4.jpg';
import Floor14thHotel5 from '../images/slides/14th-floor/5.jpg';
import Floor14thHotel6 from '../images/slides/14th-floor/6.jpg';
import Floor14thHotel7 from '../images/slides/14th-floor/7.jpg';

import TsakhkadzorComplex1 from '../images/slides/tsakhkadzor-complex/1.jpg';
import TsakhkadzorComplex2 from '../images/slides/tsakhkadzor-complex/2.jpg';
import TsakhkadzorComplex3 from '../images/slides/tsakhkadzor-complex/3.jpg';
import TsakhkadzorComplex4 from '../images/slides/tsakhkadzor-complex/4.jpg';
import TsakhkadzorComplex5 from '../images/slides/tsakhkadzor-complex/5.jpg';
import TsakhkadzorComplex6 from '../images/slides/tsakhkadzor-complex/6.jpg';
import TsakhkadzorComplex7 from '../images/slides/tsakhkadzor-complex/7.jpg';
import TsakhkadzorComplex8 from '../images/slides/tsakhkadzor-complex/8.jpg';

import AraratHotel1 from '../images/slides/ararat-hotel/1.jpg';
import AraratHotel2 from '../images/slides/ararat-hotel/2.jpg';
import AraratHotel3 from '../images/slides/ararat-hotel/3.jpg';
import AraratHotel4 from '../images/slides/ararat-hotel/4.jpg';
import AraratHotel5 from '../images/slides/ararat-hotel/5.jpg';
import AraratHotel6 from '../images/slides/ararat-hotel/6.jpg';
import AraratHotel7 from '../images/slides/ararat-hotel/7.jpg';

import PhilarmonicOrchestra1 from '../images/slides/philarmonic-orchestra/1.jpg';
import PhilarmonicOrchestra2 from '../images/slides/philarmonic-orchestra/2.jpg';
import PhilarmonicOrchestra3 from '../images/slides/philarmonic-orchestra/3.jpg';

class VenuesAndLocations extends Component {
  state = {
    show: false,
    showGallery: false,
    venueName: 'ararat-hotel',
    galleryVenueName: 'ararat-hotel',
  };

  images = {
    'floor14th-hotel': [
      Floor14thHotel1,
      Floor14thHotel2,
      Floor14thHotel3,
      Floor14thHotel4,
      Floor14thHotel5,
      Floor14thHotel6,
      Floor14thHotel7,
    ],
    'tsakhkadzor-complex': [
      TsakhkadzorComplex1,
      TsakhkadzorComplex2,
      TsakhkadzorComplex3,
      TsakhkadzorComplex4,
      TsakhkadzorComplex5,
      TsakhkadzorComplex6,
      TsakhkadzorComplex7,
      TsakhkadzorComplex8,
    ],
    'philarmonic-orchestra': [
      PhilarmonicOrchestra1,
      PhilarmonicOrchestra2,
      PhilarmonicOrchestra3,
    ],
    'ararat-hotel': [
      AraratHotel1,
      AraratHotel2,
      AraratHotel3,
      AraratHotel4,
      AraratHotel5,
      AraratHotel6,
      AraratHotel7,
    ],
  };

  handleClose = () => {
    this.setState({
      show: false,
      venueName: '',
    });
  };

  handleGalleryClose = () => {
    this.setState({
      showGallery: false,
    });
  };

  openReadMoreModal = (venueName) => {
    this.setState({
      show: true,
      venueName,
    });
  };

  openGalleryModal = (galleryVenueName) => {
    this.setState({
      showGallery: true,
      galleryVenueName,
    });
  };

  render() {
    const {
      show,
      showGallery,
      venueName,
      galleryVenueName,
    } = this.state;

    return (
      <Layout>
        <SEO
          title="Venues and Locations"
          keywords={[`tango`, `#ArmTangoFest2019`, `hotels`]}
        />
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Venues and Locations</h1>
            <p className="lead text-muted">
              Milonga, workshop and tour venues and locations. 
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
                    src={Floor14thHotelImg}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <strong>
                        14th Floor Hotel 
                      </strong>
                    </p>
                    <p className="card-text">
                      Featuring a roof terrace with views of Mount Ararat, this hotel is in the center of Yerevan, just 92 m from Republic Square. Guests enjoy free Wi-Fi and free parking.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={this.openReadMoreModal.bind(this, 'floor14th-hotel')}>
                          Read More
                        </button>
                        <button
                          onClick={this.openGalleryModal.bind(this, 'floor14th-hotel')}
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
                    src={AraratHotelImg}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <strong>
                        Tsakhkadzor Sport Complex
                      </strong>
                    </p>
                    <p className="card-text">
                      Located on the south-west slope of Mount Teghenis, this hotel offers a sports center with Olympic-size pool, and rooms with a view of the forest or valley.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={this.openReadMoreModal.bind(this, 'tsakhkadzor-complex')}>
                          Read More
                        </button>
                        <button
                          onClick={this.openGalleryModal.bind(this, 'tsakhkadzor-complex')}
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
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={this.openReadMoreModal.bind(this, 'armenian-national-philharmonic-orchestra')}>
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
              <div className="col-lg-4">
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
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={this.openReadMoreModal.bind(this, 'armenian-national-philharmonic-orchestra')}>
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
              <div className="col-lg-4">
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
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={this.openReadMoreModal.bind(this, 'armenian-national-philharmonic-orchestra')}>
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
              <div className="col-lg-4">
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
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={this.openReadMoreModal.bind(this, 'armenian-national-philharmonic-orchestra')}>
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
              <div className="col-lg-4">
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
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={this.openReadMoreModal.bind(this, 'armenian-national-philharmonic-orchestra')}>
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
              <div className="col-lg-4">
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
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={this.openReadMoreModal.bind(this, 'armenian-national-philharmonic-orchestra')}>
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
            </div>
          </div>
        </div>
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Biography</Modal.Title>
          </Modal.Header>
          <Modal.Body dangerouslySetInnerHTML={{ __html: biographies[venueName] }} />
        </Modal>
        <Modal show={showGallery} onHide={this.handleGalleryClose}>
          <Modal.Header closeButton>
            <Modal.Title>Gallery</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="gallery" id="gallery">
              {this.images[galleryVenueName].map((item, index) => {
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

export default VenuesAndLocations;
