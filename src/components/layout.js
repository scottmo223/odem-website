import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'

import Navbar from './navbar'
import '../layouts/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)


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
      <>
        <Navbar>{data.site.siteMetadata.title}</Navbar>
        <Container>
          <div>
            {children}
          </div>
          <Row>
            <Col>
              © 2019, Built By Scott Morales using <a href="https://www.gatsbyjs.org">Gatsby</a>
            </Col>
            <Col>
              <a href="https://www.facebook.com/misionestransculturalesodem/" target="_blank">Facebook</a>
            </Col>
            <Col>
              <a href="https://www.instagram.com">Instagram</a>
            </Col>
            <Col>
              <a href="https://www.twitter.com">Twitter</a>
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
