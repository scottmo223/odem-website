import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Container } from 'reactstrap'

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
          {children}
          <footer>
            © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
