import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from '../components/header';
import HomeSections from '../components/home-sections';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`tango`, `#ArmTangoFest2019`, `festival`]}
    />
    <Header />
    <HomeSections />
  </Layout>
)

export default IndexPage
