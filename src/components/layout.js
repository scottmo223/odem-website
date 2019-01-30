import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap'

import Navbar from './navbar'
import '../layouts/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab)

const linkColor = "#6c757d"
const Layout = ({ children }) => (
      <>
        <div className="bg-light text-center">
        <Navbar>ODEM Missions</Navbar>
          <div>
            {children}
          </div>
          <Row>
            <Col>
              © 2019, Built By <a href='https://github.com/scottmo223/'>Scott Morales</a>
            </Col>
            <Col>
              <a href="https://www.facebook.com/misionestransculturalesodem/" target="_blank" rel="noopener">
                <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" color={linkColor}/>  
              </a><span> </span> 
              <a href="http://twitter.com/ODEMmisiones" target="_blank" rel="noopener">
                <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" color={linkColor}/> 
              </a><span> </span> 
              <a href="https://www.youtube.com/channel/UC1N70D-r23mREV7gBDtBOvw" target="_blank" rel="noopener">  
                <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" color={linkColor}/>
              </a><span> </span> 
              <a href="https://www.instagram.com/misionestrasculturales_odem/" target="_blank" rel="noopener">
                <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" color={linkColor}/>
              </a>
            </Col>
          </Row>
        </div>
      </>
    )


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
