import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import '../scss/index.scss'

import Layout from '../components/Layout/index.js'
import Excerpt from '../components/Excerpt/index.js'
import BuyButton from '../components/BuyButton/index.js'

const buyLinks = {
  indian: 'https://www.instamojo.com/rochelledsilva/a-thin-veneer-of-coping/',
  international:
    'https://rochelledsilvapoetry.bandcamp.com/album/a-thin-veneer-of-coping',
}

function IndexPage() {
  return (
    <StaticQuery
      query={graphql`
        query ImagesQuery {
          coverImage: file(relativePath: { regex: "/cover/" }) {
            childImageSharp {
              fluid(maxHeight: 530, maxWidth: 530) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          rochelleImage: file(relativePath: { regex: "/rochelle/" }) {
            childImageSharp {
              fluid(maxHeight: 500, maxWidth: 530) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={({ coverImage, rochelleImage }) => {
        return (
          <Layout>
            <div className="container">
              <section className="top-row">
                <Img
                  fluid={rochelleImage.childImageSharp.fluid}
                  outerWrapperClassName="rochelle-image-container"
                />
                <div className="excerpt-container">
                  <Excerpt />
                </div>
              </section>

              <section className="bottom-row">
                <Img
                  fluid={coverImage.childImageSharp.fluid}
                  outerWrapperClassName="cover-image-container"
                />

                <section className="buy-links">
                  <BuyButton href={buyLinks.indian} classes="indian-link">
                    Buy Album Now! (India)
                  </BuyButton>

                  <BuyButton
                    href={buyLinks.international}
                    classes="international-link"
                  >
                    Buy Album Now! (International)
                  </BuyButton>
                </section>
              </section>
            </div>
          </Layout>
        )
      }}
    />
  )
}

export default IndexPage
