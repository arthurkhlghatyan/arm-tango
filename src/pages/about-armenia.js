import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutArmenia = () => (
  <Layout>
    <SEO
      title="About Armenia"
      keywords={[`tango`, `#ArmTangoFest2019`, `armenia`]}
    />
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">About Armenia</h1>
        <p className="lead text-muted">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <iframe
          width="100%"
          height="345"
          border="0"
          src="https://www.youtube.com/embed/vi6c2ULCzEU" />
        <iframe
          width="100%"
          height="345"
          border="0"
          src="https://www.youtube.com/embed/gjEFDYyryiw" />
      </div>
    </section>
  </Layout>
);

export default AboutArmenia;
