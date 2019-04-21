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

class DJs extends Component {
  state = {
    showBio: false,
    showGallery: false,
    bioItemName: 'luca-lamberti',
    galleryItemName: 'luca-lamberti',
  };

  page = {
    title: 'DJs',
    keywords: [`tango`, `#ArmTangoFest2019`, `maestros`],
    description: `
      Famous DJs will lead us into the majestic tango world.
    `,
  };

  data = {
    'luca-lamberti': {
      title: 'Luca Lamberti',
      graphAlias: 'lucaLamberti',
      description: `
        Luca is a well known tango DJ, teacher, and dancer in the European tango circuit.
        Luca has been around to Europe, middle East and Asia spreading his unique spiritual approach to tango.
        Dancing since the year 2000 and studying with key tango world figures.
        Luca has been the organizer of Tangocamp Italy since 2009 and a key figure in the other 3 tango camp festivals.
        Organising also Roman holiday tango marathon in Rome.
      `,
    },
    'mihran-sigaher': {
      title: 'Mihran Sigaher',
      graphAlias: 'mihranSigaher',
      description: `
        Improved himself by gathering information about tango and tango music archives from orchestras since 2006 his start to tango,
        Mihran began DJing at 2008.
        From 2008 to the present, he has been playing music in Turkey, Italy, Romania, Bulgaria and Greece milongas.
        Mihran brings tango dancers and audiences together with various orchestras by blending rhythm and melody in appropriate proportions.
      `,
    },
    'tatiana-gordinscaia': {
      title: 'Tatiana Gordinscaya',
      graphAlias: 'tatianaGordinscaia',
      description: `
        Tatiana was started to dance argentinian tango 8 years ago and at the moment she has felt that tango is a dance of her soul
        she decided to found first argentinian tango school in Moldova.
        After she visited Buenos Aires, she decided that to put music on milongas is an art,
        and one part of this art is to create atmosphere of small Buenos Aires at the milonga.
      `,
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

  handleBioClose = () => {
    this.setState({
      showBio: false,
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
      'luca-lamberti',
      'mihran-sigaher',
      'tatiana-gordinscaia',
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
          thumbnailFluid={this.findThumbnail(slug)}
          onReadMoreClick={this.openReadMore.bind(this, slug)}
          onSeePhotosClick={this.openGallery.bind(this, slug)}
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
      </Layout>
    );
  }
}

export const query = graphql`
  query DJsQuery {
    thumbnails: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "thumbnails/djs" }
      }
    ) {
      edges {
        node {
          ...thumbnail
          name
        }
      }
    }
    lucaLambertiSlides: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "slides/luca-lamberti" }
      }
    ) {
      edges {
        node {
          ...galleryImage
        }
      }
    }
    mihranSigaherSlides: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "slides/mihran-sigaher" }
      }
    ) {
      edges {
        node {
          ...galleryImage
        }
      }
    }
    tatianaGordinscaiaSlides: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "slides/tatiana-gordinscaia" }
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

export default DJs;
