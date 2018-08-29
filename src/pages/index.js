import React from 'react'
// import Media from 'react-media'
// import Media from 'react-responsive'
// import { Link } from 'gatsby'
import RochellePicture from '../assets/rochelle.jpg'
import CoverArt from '../assets/cover.jpg'

import Layout from '../components/layout'

class IndexPage extends React.Component {
  state = {
    device: 'mobile',
  }

  componentDidMount() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.setState({ device: 'mobile' })
    } else {
      this.setState({ device: 'desktop' })
    }
  }
  render() {
    const { device } = this.state
    return (
      <Layout>
        {device === 'mobile' ? (
          <div className="container">
            <section
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={RochellePicture}
                alt="Rochelle D'Silva"
                style={{
                  width: '80%',
                  height: '80%',
                  maxHeight: '100%',
                  maxWidth: '100%',
                }}
              />
              <span
                style={{
                  background: 'white',
                  padding: '20px',
                  boxShadow: '0px 1px 32px 6px rgba(218,218,218,1)',
                }}
              >
                Just this once
                <br /> Let me peel back this thin veneer of coping
                <br /> and show you where it hurts
                <br /> Which wounds healed, and the lessons they taught
                <br /> Show me that I am not alone
                <br /> Hold me safe in your listening
                <br /> Sans judgement and prejudice
                <br />
                <br /> Let my words spill out of a jaw
                <br /> once held tight
                <br /> Not like a dam overflowing
                <br /> but a restless river with a story to tell
                <br /> I have stories to tell
                <br /> I have stories worth telling
              </span>
            </section>

            <section
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
              }}
            >
              <img
                src={CoverArt}
                alt="A Thin Veneer of Coping Cover Art"
                style={{
                  width: '80%',
                  height: '80%',
                  maxHeight: '100%',
                  maxWidth: '100%',
                }}
              />

              <a
                href="https://www.instamojo.com/rochelledsilva/a-thin-veneer-of-coping/"
                style={{
                  boxShadow: 'rgb(34, 34, 34) 4px 4px 0px',
                  color: `rgb(34, 34, 34)`,
                  fontWeight: `600`,
                  display: `inline-block`,
                  cursor: `pointer`,
                  backgroundColor: `rgb(131, 255, 205)`,
                  borderWidth: `2px`,
                  borderStyle: `solid`,
                  borderColor: `rgb(34, 34, 34)`,
                  borderRadius: `5px`,
                  padding: `6px 12px`,
                  textDecoration: 'none',
                  ':hover': {
                    boxShadow: 'rgb(34, 34, 34) 2px 2px 0px',
                  },
                }}
              >
                Buy Album Now! (India)
              </a>

              <a
                href="https://rochelledsilvapoetry.bandcamp.com/album/a-thin-veneer-of-coping"
                style={{
                  boxShadow: 'rgb(34, 34, 34) 4px 4px 0px',
                  color: `rgb(34, 34, 34)`,
                  fontWeight: `600`,
                  display: `inline-block`,
                  cursor: `pointer`,
                  backgroundColor: `rgb(131, 255, 205)`,
                  borderWidth: `2px`,
                  borderStyle: `solid`,
                  borderColor: `rgb(34, 34, 34)`,
                  borderRadius: `5px`,
                  padding: `6px 12px`,
                  textDecoration: 'none',
                  marginTop: '20px',
                  ':hover': {
                    boxShadow: 'rgb(34, 34, 34) 2px 2px 0px',
                  },
                }}
              >
                Buy Album Now! (International)
              </a>
            </section>
          </div>
        ) : (
          <div className="container">
            <section
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={RochellePicture}
                alt="Rochelle D'Silva"
                style={{
                  width: '50%',
                  height: '50%',
                  maxHeight: '100%',
                  maxWidth: '100%',
                }}
              />
              <span
                style={{
                  background: 'white',
                  padding: '20px',
                  marginLeft: '40px',
                  boxShadow: '0px 1px 32px 6px rgba(218,218,218,1)',
                }}
              >
                Just this once
                <br /> Let me peel back this thin veneer of coping
                <br /> and show you where it hurts
                <br /> Which wounds healed, and the lessons they taught
                <br /> Show me that I am not alone
                <br /> Hold me safe in your listening
                <br /> Sans judgement and prejudice
                <br />
                <br /> Let my words spill out of a jaw
                <br /> once held tight
                <br /> Not like a dam overflowing
                <br /> but a restless river with a story to tell
                <br /> I have stories to tell
                <br /> I have stories worth telling
              </span>
            </section>

            <section
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
              }}
            >
              <img
                src={CoverArt}
                alt="A Thin Veneer of Coping Cover Art"
                style={{
                  width: '50%',
                  height: '50%',
                  maxHeight: '100%',
                  maxWidth: '100%',
                }}
              />

              <div style={{ width: '50%', textAlign: 'center' }}>
                <a
                  href="https://www.instamojo.com/rochelledsilva/a-thin-veneer-of-coping/"
                  style={{
                    boxShadow: 'rgb(34, 34, 34) 4px 4px 0px',
                    color: `rgb(34, 34, 34)`,
                    fontWeight: `600`,
                    display: `inline-block`,
                    cursor: `pointer`,
                    backgroundColor: `rgb(131, 255, 205)`,
                    borderWidth: `2px`,
                    borderStyle: `solid`,
                    borderColor: `rgb(34, 34, 34)`,
                    borderRadius: `5px`,
                    padding: `6px 12px`,
                    textDecoration: 'none',
                    ':hover': {
                      boxShadow: 'rgb(34, 34, 34) 2px 2px 0px',
                    },
                  }}
                >
                  Buy Album Now! (India)
                </a>

                <a
                  href="https://rochelledsilvapoetry.bandcamp.com/album/a-thin-veneer-of-coping"
                  style={{
                    boxShadow: 'rgb(34, 34, 34) 4px 4px 0px',
                    color: `rgb(34, 34, 34)`,
                    fontWeight: `600`,
                    display: `inline-block`,
                    cursor: `pointer`,
                    backgroundColor: `rgb(131, 255, 205)`,
                    borderWidth: `2px`,
                    borderStyle: `solid`,
                    borderColor: `rgb(34, 34, 34)`,
                    borderRadius: `5px`,
                    padding: `6px 12px`,
                    textDecoration: 'none',
                    marginTop: '20px',
                    ':hover': {
                      boxShadow: 'rgb(34, 34, 34) 2px 2px 0px',
                    },
                  }}
                >
                  Buy Album Now! (International)
                </a>
              </div>
            </section>
          </div>
        )}
      </Layout>

      // <Layout>
      //   <Media
      //     query="(max-width: 599px)"
      //     defaultMatches={device === 'mobile'}
      //     render={() => }
      //   />

      //   <Media
      //     query="(min-width: 600px)"
      //     defaultMatches={device === 'desktop'}
      //     render={() => (

      //     )}
      //   />
      // </Layout>
    )
  }
}

export default IndexPage
