import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'reactstrap'

import Navbar from './navbar'
import '../layouts/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)


const Layout = ({ children }) => (
      <>
        <div className="bg-light">
        <Navbar>ODEM Missions</Navbar>
        <Container>
          <div>
            {children}
          </div>
          <Row>
            <Col xs="8">
              © 2019, Built By <a href='https://github.com/scottmo223/'>Scott Morales</a>
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
        </div>
      </>
    )


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
