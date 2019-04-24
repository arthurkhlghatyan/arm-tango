import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Jumbotron from '../components/jumbotron';
import aboutArmeniaText from '../data/about-armenia';

const AboutArmenia = () => (
  <Layout>
    <SEO
      title="About Armenia"
      keywords={[`tango`, `#ArmTangoFest2019`, `armenia`]}
    />
    <Jumbotron title="About Armenia">
      <iframe
        className="mt-3"
        width="100%"
        height="345"
        border="0"
        src="https://www.youtube.com/embed/vi6c2ULCzEU" />
      <p
        className="lead mt-3 text-muted"
        dangerouslySetInnerHTML={{ __html: aboutArmeniaText }} />
    </Jumbotron>
  </Layout>
);

export default AboutArmenia;
