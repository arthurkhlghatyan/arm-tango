import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Jumbotron from '../components/jumbotron';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Jumbotron
      title="Not found"
      description="You just hit a page that doesn't exist... the sadness."
    />
  </Layout>
)

export default NotFoundPage;
