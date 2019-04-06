import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Navigation from './navigation';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/layout.css';
import './scss/main.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Navigation siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
      </Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
