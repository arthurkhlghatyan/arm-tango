import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet';

import Navigation from './navigation';
import Footer from './footer';

// Import main css files
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <Helmet>
          <script src="https://www.google.com/recaptcha/api.js?render=explicit"></script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-138348380-1"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-138348380-1');

              var getOutboundLink = function(url) {
                gtag('event', 'click', {
                  'event_category': 'outbound',
                  'event_label': url,
                  'transport_type': 'beacon',
                  'event_callback': function() {document.location = url;}
                });
              }
            `}
          </script>
        </Helmet>
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
