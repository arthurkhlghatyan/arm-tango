import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import GridItem from '../components/grid-item';
import Modal from 'react-bootstrap/Modal';
import biographies from '../data/biographies';

// Thumbnails
import yulianaBasmajyanThumb from '../images/yuliana-basmajyan.jpg';
import ronenDoritThumb from '../images/ronen-dorit.jpg';
import dominicBridgeThumb from '../images/dominic-bridge.jpg';
import tatianaPavelThumb from '../images/tatiana-pavel.jpg';

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
    showBio: false,
    showGallery: false,
    showVideos: false,
    bioItemName: 'yuliana-basmajyan',
    galleryItemName: 'yuliana-basmajyan',
    videoItemName: 'yuliana-basmajyan',
  };

  page = {
    title: 'Maestros',
    keywords: [`tango`, `#ArmTangoFest2019`, `maestros`],
    description: `
      Famous tango maestros are going to share, teach and dance during Festival.
    `,
  };

  data = {
    'yuliana-basmajyan': {
      title: 'Yuliana Basmajyan',
      description: `
        Born and raised in Armenia, Yuliana Basmajyan immigrated to the US in her early adolescent years.
        For many years she tested her skills in different dance forms including modern, jazz, flamenco, and extensive training in Salsa.
        After several years of Latin dancing she discovered her true calling, a dance that truly inspired and challenged her…Tango.
      `,
      thumbnailSrc: yulianaBasmajyanThumb,
      images: [
        YulianaBasmajyan1,
        YulianaBasmajyan2,
        YulianaBasmajyan3,
        YulianaBasmajyan4,
        YulianaBasmajyan5,
      ],
      videos: [
        'HDJYm2okrbo',
        'vi1ZDL8aBMI',
      ],
    },
    'dominic-bridge': {
      title: 'Dominic Bridge',
      description: `
        Dominic has been working in tango full-time since 2007.
        He has taught and performed in international tango festivals,
        cultural events, and offered workshops in over a dozen countries around the world,
        including Buenos Aires.
      `,
      thumbnailSrc: dominicBridgeThumb,
      images: [
        DominicBridge1,
        DominicBridge2,
        DominicBridge3,
        DominicBridge4,
        DominicBridge5,
      ],
      videos: [
        'XOHGiT-xaBM',
        '1cdtb-yrZxY',
        'yanTqfvvUsw',
      ],
    },
    'ronen-dorit': {
      title: 'Ronen & Dorit',
      description: `
        Dance the emotion - one of the main characteristics of Dorit and Ronen's tango, combined with very high level of technique and precision.
        A strong emphasis on embrace, deep and real connection and uncompromised passion create their special and unique art of tango.
        Within this ambient they teach their tango classes with a nice combination of excellent didactic skills and the feeling of the love of the dance and the never ending joy of it.
      `,
      thumbnailSrc: ronenDoritThumb,
      images: [
        RonenDorit1,
        RonenDorit2,
        RonenDorit3,
        RonenDorit4,
        RonenDorit5,
        RonenDorit6,
      ],
      videos: [
        'QmWUVDlK1wk',
        'ABsTgrSARJQ',
      ],
    },
    'tatiana-pavel': {
      title: 'Tatiana Gordinscaia & Pavel Lozan',
      description: `
        Tatiana & Pavel dancing together since year 2013. Tatiana founded first school of Argentinean tango in Moldova in 2010, and also organized 3 big festivals and 3 marathons, common known as MADT.
      `,
      thumbnailSrc: tatianaPavelThumb,
      images: [
        TatianaPavel1,
        TatianaPavel2,
        TatianaPavel3,
      ],
      videos: [
        'OytWpIZnYq8',
      ],
    },
  };

  openReadMore = (bioItemName) => {
    this.setState({
      showBio: true,
      bioItemName,
    });
  };

  openGallery = (galleryItemName) => {
    this.setState({
      showGallery: true,
      galleryItemName,
    });
  };

  openWatchVideos = (videoItemName) => {
    this.setState({
      showVideos: true,
      videoItemName,
    });
  };

  handleBioClose = () => {
    this.setState({
      showBio: false,
    });
  };

  handleVideosClose = () => {
    this.setState({
      showVideos: false,
    });
  };

  handleGalleryClose = () => {
    this.setState({
      showGallery: false,
    });
  };

  renderVideos() {
    const { videoItemName } = this.state;
    const { videos } = this.data[videoItemName];

    const map = (item, index) => {
      return (
        <iframe
          key={index}
          width="100%"
          height="345"
          src={`https://www.youtube.com/embed/${item}`} />
      );
    };

    return videos.map(map);
  }

  renderVideoModal() {
    const { showVideos } = this.state;

    return (
      <Modal show={showVideoModal} onHide={this.handleVideosClose}>
        <Modal.Header closeButton>
          <Modal.Title>Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.renderVideos()}
        </Modal.Body>
      </Modal>
    );
  }

  renderGalleryImages() {
    const { galleryItemName } = this.state;
    const { images } = this.data[galleryItemName];

    const map = (item, index) => {
      return (
        <div key={index} className="mb-3 pics animation all 2">
          <img className="img-fluid" src={item} />
        </div>
      );
    };

    return images.map(map);
  }

  renderGalleryModal() {
    const { showGallery } = this.state;

    return (
      <Modal show={showGallery} onHide={this.handleGalleryClose}>
        <Modal.Header closeButton>
          <Modal.Title>Gallery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="gallery" id="gallery">
            {this.renderGalleryImages()}
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  renderBioModal() {
    const { showBio, bioItemName } = this.state;

    return (
      <Modal show={showBio} onHide={this.handleBioClose}>
        <Modal.Header closeButton>
          <Modal.Title>Biography</Modal.Title>
        </Modal.Header>
        <Modal.Body dangerouslySetInnerHTML={{ __html: biographies[bioItemName] }} />
      </Modal>
    );
  }

  renderItems() {
    const items = [
      'yuliana-basmajyan',
      'dominic-bridge',
      'ronen-dorit',
      'tatiana-pavel',
    ];

    const map = (slug, index) => {
      const item = this.data[slug];
      const {
        title,
        description,
        thumbnailSrc,
      } = item;

      return (
        <GridItem
          key={index}
          slug={slug}
          title={title}
          description={description}
          thumbnailSrc={thumbnailSrc}
          onReadMoreClick={this.openReadMore.bind(this, slug)}
          onSeePhotosClick={this.openGallery.bind(this, slug)}
          openWatchVideos={this.openWatchVideos.bind(this, slug)}
        />
      );
    };

    return items.map(map);
  }

  render() {
    return (
      <Layout>
        <SEO
          title={this.page.title}
          keywords={this.page.keywords}
        />
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">{this.page.title}</h1>
            <p className="lead text-muted">
              {this.page.description}
            </p>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {this.renderItems()}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Maestros;
