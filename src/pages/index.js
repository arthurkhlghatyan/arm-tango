import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import HomeSection from '../components/home-section';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`tango`, `#ArmTangoFest2019`, `festival`]}
    />
    <Header posterFluid={data.posterImage.childImageSharp.fluid} />
    <HomeSection
      title="Argentine Tango Festival"
      description={
        `Maestros, tangueras, tangueros, and DJs from all over the world will join us for this inaugural Tango Festival in Armenia
        – the ancient land at the crossroads of East and West.
        The festival includes two weekends of workshops, milongas, after-parties, and guided tours of the capital city and the regions.`
      }
    >
      <Img fluid={data.festivalImage.childImageSharp.fluid} />
    </HomeSection>
    <HomeSection
      title="About Armenia"
      description={
        `Armenia's landscapes offer boundless beauty.
        Seven main landscape types are represented across the different altitudinal zones of Armenia.
        Across these desert, semi desert, dry steppe, steppe, woodland, sub alpine and alpine zones is geography as diverse as high mountain peaks,
        fertile valleys, picturesque land formations, basalt columns, rock sculptures, and waterfalls.
        More than 200 rivers and streams traverse Armenia, with steep falls, rapids and swift currents.`
      }
    >
      <iframe
        title="About Armenia"
        width="100%"
        height="300"
        border="0"
        src="https://www.youtube.com/embed/gjEFDYyryiw" />
    </HomeSection>
  </Layout>
);


export const query = graphql`
  query IndexPageQuery {
    posterImage: file(relativePath: { eq: "poster.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    festivalImage: file(relativePath: { eq: "festival.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default IndexPage;
