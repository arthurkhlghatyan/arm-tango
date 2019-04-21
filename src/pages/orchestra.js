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

class Orchestra extends Component {
  state = {
    showBio: false,
    showGallery: false,
    bioItemName: 'philarmonic-orchestra',
    galleryItemName: 'philarmonic-orchestra',
  };

  page = {
    title: 'Orchestra',
    keywords: [`tango`, `#ArmTangoFest2019`, `maestros`],
    description: `
      Traditional and Nuevo Tangos on the Philharmonic stage and live Argentinian Bandoneon and guitar sounds during milongas
    `,
  };

  data = {
    'philarmonic-orchestra': {
      title: 'Armenian National Philharmonic Orchestra',
      graphAlias: 'philarmonicOrchestra',
      description: `
        The Armenian National Philharmonic Orchestra (ANPO) was founded in 1925 by Arshak Adamyan and Alexander Spendiaryan.
        For many years it has been considered as one of the leading orchestras of the former Soviet Union.
        Today, it is a national center of the professional orchestral music in Armenia.
      `,
    },
    'hugo-satorre': {
      title: 'Hugo Satorre',
      graphAlias: 'hugoSatorre',
      description: `
        Hugo Satorre has performed in some of the most prestigious theatre and concert halls throughout the world.
        Some worth noting are: the Sydney Opera House (Australia), The Esplanade (Singapore), the Walt Disney Hall (Los Angeles), el Teatro Colón (Buenos Aires), the Shanghai Oriental Art Center (Shanghai).
        In March 2012 he accompanied tenor Placido Domingo on a stage set up in the widest avenue in Buenos Aires, 9 de Julio Av., in front of 120,000 people.
      `,
    },
    'fernando-sanchez': {
      title: 'Fernando Sanchez',
      graphAlias: 'fernandoSanchez',
      description: `
        Fernando Sánchez was born in Buenos Aires in 1980 and began his guitar studies with private teachers.
        In 2008, he graduated from Conservatorio Superior de Música “Astor Piazzolla” of Buenos Aires as a Guitar and Music Teacher.
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
      'philarmonic-orchestra',
      'hugo-satorre',
      'fernando-sanchez',
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
  query OrchestraQuery {
    thumbnails: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "thumbnails/orchestra" }
      }
    ) {
      edges {
        node {
          ...thumbnail
          name
        }
      }
    }
    philarmonicOrchestraSlides: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "slides/philarmonic-orchestra" }
      }
    ) {
      edges {
        node {
          ...galleryImage
        }
      }
    }
    hugoSatorreSlides: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "slides/hugo-satorre" }
      }
    ) {
      edges {
        node {
          ...galleryImage
        }
      }
    }
    fernandoSanchezSlides: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "slides/fernando-sanchez" }
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

export default Orchestra;
