import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'

import Navbar from './navbar'
import '../layouts/bootstrap.min.css'

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
              © 2019, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
            </Col>
            <Col>
              <a href="https://www.gatsbyjs.org">Facebook</a>
            </Col>
            <Col>
              <a href="https://www.gatsbyjs.org">Instagram</a>
            </Col>
            <Col>
              <a href="https://www.gatsbyjs.org">Twitter</a>
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
