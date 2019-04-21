import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import GridItem from '../components/grid-item';
import Jumbotron from '../components/jumbotron';
import GridLayout from '../components/grid-layout';
import Modal from 'react-bootstrap/Modal';
import biographies from '../data/biographies';

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
      graphAlias: 'yulianaBasmajyan',
      description: `
        Born and raised in Armenia, Yuliana Basmajyan immigrated to the US in her early adolescent years.
        For many years she tested her skills in different dance forms including modern, jazz, flamenco, and extensive training in Salsa.
        After several years of Latin dancing she discovered her true calling, a dance that truly inspired and challenged her…Tango.
      `,
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
      graphAlias: 'dominicBridge',
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
      graphAlias: 'ronenDorit',
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
      graphAlias: 'tatianaPavel',
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

  findThumbnail = (slug) => {
    const thumbnails = this.props.data.thumbnails.edges;
    const length = thumbnails.length;

    for (let i = 0; i < length; i += 1) {
      if (thumbnails[i].node.name === slug) {
        return thumbnails[i].node.childImageSharp.fluid;
      }
    }

    return false;
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
      <Modal show={showVideos} onHide={this.handleVideosClose}>
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
    const { graphAlias } = this.data[galleryItemName];
    const images = this.props.data[`${graphAlias}Slides`].edges;

    const map = (item, index) => {
      return (
        <div key={index} className="mb-3 pics animation all 2">
          <Img className="img-fluid" fluid={item.node.childImageSharp.fluid} />
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
      } = item;

      return (
        <GridItem
          key={index}
          slug={slug}
          title={title}
          description={description}
          hasVideos
          thumbnailFluid={this.findThumbnail(slug)}
          onReadMoreClick={this.openReadMore.bind(this, slug)}
          onSeePhotosClick={this.openGallery.bind(this, slug)}
          onWatchVideosClick={this.openWatchVideos.bind(this, slug)}
        />
      );
    };

    return items.map(map);
  }

  render() {
    const { title, description, keywords } = this.page;
    const { data } = this.props;

    return (
      <Layout>
        <SEO
          title={title}
          keywords={keywords}
        />
        <Jumbotron title={title} description={description} />
        <GridLayout>
          {this.renderItems()}
        </GridLayout>
        {this.renderBioModal()}
        {this.renderGalleryModal()}
        {this.renderVideoModal()}
      </Layout>
    );
  }
}

export const query = graphql`
  query MaestrosQuery {
    thumbnails: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "thumbnails/maestros" }
      }
    ) {
      edges {
        node {
          ...thumbnail
          name
        }
      }
    }
    yulianaBasmajyanSlides: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "slides/yuliana-basmajyan" }
      }
    ) {
      edges {
        node {
          ...galleryImage
        }
      }
    }
    dominicBridgeSlides: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "slides/dominic-bridge" }
      }
    ) {
      edges {
        node {
          ...galleryImage
        }
      }
    }
    ronenDoritSlides: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "slides/ronen-dorit" }
      }
    ) {
      edges {
        node {
          ...galleryImage
        }
      }
    }
    tatianaPavelSlides: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "slides/tatiana-pavel" }
      }
    ) {
      edges {
        node {
          ...galleryImage
        }
      }
    }
  }
`;

export default Maestros;
