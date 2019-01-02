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
              © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
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
