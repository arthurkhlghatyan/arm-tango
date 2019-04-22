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
      <p className="lead text-muted" dangerouslySetInnerHTML={{ __html: aboutArmeniaText }} />
      <iframe
        width="100%"
        height="345"
        border="0"
        src="https://www.youtube.com/embed/vi6c2ULCzEU" />
    </Jumbotron>
  </Layout>
);

export default AboutArmenia;
