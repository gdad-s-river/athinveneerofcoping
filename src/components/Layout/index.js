import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../Header/index.js'
import './index.scss'

const Layout = ({ children, data }) => {
  return (
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
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: 'A Thin Veneer Of Coping Album Launch',
              },
              {
                name: 'keywords',
                content: `Album Launch, Rochelle D'Silva, A Thin Veneer Of Coping`,
              },
            ]}
          >
            <html lang="en" />
            {/* Facebook meta open tags*/}
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta
              property="og:title"
              content="Rochelle D'Silva — A Thin Veneer of Coping"
            />
            <meta
              property="og:description"
              content="Poetry-Music Album — A Thin Veneer of Coping by Rochelle D'Silva"
            />
            <meta
              property="og:image"
              content="https://f4.bcbits.com/img/a3059630761_16.jpg"
            />
            <meta
              property="og:url"
              content="https://athinveneerofcoping.now.sh"
            />

            <meta property="og:site_name" content="A Thin Veneer of Coping" />
            {/* Twitter meta tags */}

            <meta
              name="twitter:title"
              content="Rochelle D'Silva — A Think Veneer of Coping"
            />
            <meta
              name="twitter:description"
              content="Poetry-Music Album — A Thin Veneer of Coping by Rochelle D'Silva"
            />
            <meta
              name="twitter:image"
              content="https://f4.bcbits.com/img/a3059630761_16.jpg"
            />
            <meta
              name="twitter:card"
              content="https://athinveneerofcoping.now.sh/static/cover-1b9ddc5323039bb9ec20f0ac364ed75b-59ab8.jpg"
            />

            <meta
              name="twitter:image:alt"
              content="A Thin Veneer of Coping Cover"
            />
          </Helmet>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children}
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
