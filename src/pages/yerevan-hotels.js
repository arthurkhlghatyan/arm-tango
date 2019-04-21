import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import biographies from '../data/biographies';
import AraratHotelImg from '../images/ararat-hotel.jpg';
import ArmeniaTourImg from '../images/armenia-tour.jpg';
import Modal from 'react-bootstrap/Modal';

// Slides
import AraratHotel1 from '../images/slides/ararat-hotel/1.jpg';
import AraratHotel2 from '../images/slides/ararat-hotel/2.jpg';
import AraratHotel3 from '../images/slides/ararat-hotel/3.jpg';
import AraratHotel4 from '../images/slides/ararat-hotel/4.jpg';
import AraratHotel5 from '../images/slides/ararat-hotel/5.jpg';
import AraratHotel6 from '../images/slides/ararat-hotel/6.jpg';
import AraratHotel7 from '../images/slides/ararat-hotel/7.jpg';

class YerevanHotels extends Component {
  state = {
    show: false,
    showGallery: false,
    hotelName: 'ararat-hotel',
    galleryHotelName: 'ararat-hotel',
  };

  images = {
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
      hotelName: '',
    });
  };

  handleGalleryClose = () => {
    this.setState({
      showGallery: false,
    });
  };

  openReadMoreModal = (hotelName) => {
    this.setState({
      show: true,
      hotelName,
    });
  };

  openGalleryModal = (galleryHotelName) => {
    this.setState({
      showGallery: true,
      galleryHotelName,
    });
  };

  render() {
    const {
      show,
      showGallery,
      hotelName,
      galleryHotelName,
    } = this.state;

    return (
      <Layout>
        <SEO
          title="Yerevan Hotels"
          keywords={[`tango`, `#ArmTangoFest2019`, `hotels`]}
        />
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Yerevan Hotels</h1>
            <p className="lead text-muted">
              Hurry up to register!!! We have special rates and upgraded rooms for Armenia Tango Festival participants 
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
                    src={AraratHotelImg}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <strong>
                        Ararat Hotel
                        &nbsp;
                        (&#9733; &#9733; &#9733; &#9733; &#9734;)
                      </strong>
                    </p>
                    <p className="card-text">
                      Ararat Hotel is not just a hotel, it’s a complex providing a wide range of hotel services as well as other attractive ways of rest and relaxation.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={this.openReadMoreModal.bind(this, 'ararat-hotel')}>
                          Read More
                        </button>
                        <button
                          onClick={this.openGalleryModal.bind(this, 'ararat-hotel')}
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
                    src={ArmeniaTourImg}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <strong>
                        Armenia Tour
                      </strong>
                    </p>
                    <p className="card-text">
                      "Armenia Tour" travel agency was founded in 2015 and spares no effort for developing its business intensively.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          onClick={this.openReadMoreModal.bind(this, 'armenia-tour')}
                          type="button"
                          className="btn btn-sm btn-outline-secondary">
                          Read More
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
          <Modal.Body dangerouslySetInnerHTML={{ __html: biographies[hotelName] }} />
        </Modal>
        <Modal show={showGallery} onHide={this.handleGalleryClose}>
          <Modal.Header closeButton>
            <Modal.Title>Gallery</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="gallery" id="gallery">
              {this.images[galleryHotelName].map((item, index) => {
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

export default YerevanHotels;
