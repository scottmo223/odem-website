import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const linkColor = "rgba(0,0,0,0.5)"

const socialLinks = () => (
  <div class="d-flex justify-content-around">
    <a href="https://www.facebook.com/misionestransculturalesodem/" target="_blank">
      <FontAwesomeIcon icon={["fab", "facebook"]} size="3x" color={linkColor}/>  
    </a>
    <a href="http://twitter.com/ODEMmisiones" target="_blank">
      <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" color={linkColor}/> 
    </a>
    <a href="https://www.youtube.com/channel/UC1N70D-r23mREV7gBDtBOvw" target="_blank">  
      <FontAwesomeIcon icon={['fab', 'youtube']} size="3x" color={linkColor}/>
    </a>
    <a href="https://www.instagram.com/misionestrasculturales_odem/" target="_blank">
      <FontAwesomeIcon icon={['fab', 'instagram']} size="3x" color={linkColor}/>
    </a>
  </div>
)

export default socialLinks;