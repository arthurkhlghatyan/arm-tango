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

class VenuesAndLocations extends Component {
  state = {
    showBio: false,
    showGallery: false,
    bioItemName: 'floor14th-hotel',
    galleryItemName: 'floor14th-hotel',
  };

  page = {
    title: 'Venues and Locations',
    keywords: [`tango`, `#ArmTangoFest2019`, `hotels`],
    description: `
      Milonga, workshop and tour venues and locations.
    `,
  };

  items = [
    'floor14th-hotel',
    'tsakhkadzor-complex',
    'philarmonic-orchestra',
    'ararat-hotel',
    'jockey',
    'horse-riding',
    'parz-lake',
    'enokavan',
    'aires',
    'kangar',
  ];

  data = {
    'floor14th-hotel': {
      title: '14th Floor Hotel',
      graphAlias: 'floor14thHotel',
      description: `
        Featuring a roof terrace with views of Mount Ararat, this hotel is in the center of Yerevan, just 92 m from Republic Square. Guests enjoy free Wi-Fi and free parking.
      `,
    },
    'tsakhkadzor-complex': {
      title: 'Tsakhkadzor Sport Complex',
      graphAlias: 'tsakhkadzorComplex',
      description: `
        Located on the south-west slope of Mount Teghenis,
        this hotel offers a sports center with Olympic-size pool, and rooms with a view of the forest or valley.
      `,
    },
    'philarmonic-orchestra': {
      title: 'Armenian National Philharmonic Orchestra',
      graphAlias: 'philarmonicOrchestra',
      description: `
        The Armenian National Philharmonic Orchestra (ANPO) was founded in 1925 by Arshak Adamyan and Alexander Spendiaryan.
        For many years it has been considered as one of the leading orchestras of the former Soviet Union.
      `,
    },
    'ararat-hotel': {
      title: 'Ararat Hotel',
      graphAlias: 'araratHotel',
      description: `
        Ararat Hotel is not just a hotel, it’s a complex providing a wide range of hotel services as well as other attractive ways of rest and relaxation.
      `,
    },
    'jockey': {
      title: 'Jockey',
      graphAlias: 'jockey',
      description: `
        It is an excellent selection for foreigners to visit and admire its magnificent scenery.
      `,
    },
    'horse-riding': {
      title: 'Horse Riding',
      graphAlias: 'horseRiding',
      description: `
        It’s a beautiful place, a world away from the bustle of urban life, a place, where you can admire the horses and ride if you wish.
      `,
    },
    'parz-lake': {
      title: 'Parz Lake',
      graphAlias: 'parzLake',
      description: `
        Lake Parz (Armenian: Պարզ Լիճ) is a small lake located in the Dilijan National Park east of Dilijan in Armenia.
        The lake was formed by natural climatic changes. "Parz" in Armenian means clear.
      `,
    },
    'enokavan': {
      title: 'Enokavan',
      graphAlias: 'enokavan',
      description: ``,
    },
    'aires': {
      title: 'Aires',
      graphAlias: 'aires',
      description: ``,
    },
    'kangar': {
      title: 'Kangar',
      graphAlias: 'kangar',
      description: `
        Ever wished for an exceptional party but want to avoid the hassle of preparing one? We take delight in listening to our clients' needs and visualizations for their dream celebration.
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

    return this.items.map(map);
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
  query VenuesAndLocationsQuery {
    thumbnails: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "thumbnails/venues" }
      }
    ) {
      edges {
        node {
          ...thumbnail
          name
        }
      }
    }
    floor14thHotelSlides: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "slides/floor14th-hotel" }
      }
    ) {
      edges {
        node {
          ...galleryImage
        }
      }
    }
    tsakhkadzorComplexSlides: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "slides/tsakhkadzor-complex" }
      }
    ) {
      edges {
        node {
          ...galleryImage
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
    araratHotelSlides: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "slides/ararat-hotel" }
      }
    ) {
      edges {
        node {
          ...galleryImage
        }
      }
    }
    jockeySlides: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "slides/jockey" }
      }
    ) {
      edges {
        node {
          ...galleryImage
        }
      }
    }
    horseRidingSlides: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "slides/horse-riding" }
      }
    ) {
      edges {
        node {
          ...galleryImage
        }
      }
    }
    parzLakeSlides: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "slides/parz-lake" }
      }
    ) {
      edges {
        node {
          ...galleryImage
        }
      }
    }
    enokavanSlides: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "slides/enokavan" }
      }
    ) {
      edges {
        node {
          ...galleryImage
        }
      }
    }
    airesSlides: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "slides/aires" }
      }
    ) {
      edges {
        node {
          ...galleryImage
        }
      }
    }
    kangarSlides: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "slides/kangar" }
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

export default VenuesAndLocations;
