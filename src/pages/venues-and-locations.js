import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const VenuesAndLocations = () => (
  <Layout>
    <SEO
      title="Venues and Locations"
      keywords={[`tango`, `#ArmTangoFest2019`]}
    />
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Venues and Locations</h1>
      </div>
    </section>
  </Layout>
);

export default VenuesAndLocations;
