import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactUs = () => (
  <Layout>
    <SEO title="Contact Us" />
    <h1 style={{ margin: '4rem auto', fontWeight: 'bold', fontSize: '4em' }} className='text-dark'>Support Our Mission</h1>
    <hr />
    <p>There are many ways to give.</p>
    <p>You can donate online, or send a check directly to us.</p>
    <hr />
    <div className="row">
      <div className="col-sm">
        <p>Clicking the below link will take you to our Paypal website where you will be able to donate online.</p>
        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=K68GMA2X9A3TU&item_name=ODEM+Missions+2019&currency_code=USD&source=url" target="_blank">
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </a>
      </div>
      <div className="col-sm">
        <p>Please make checks payable to "Chuck Perez"</p>
        <p>You can mail checks to:</p>
        <p>### Barbara St</p>
        <p>Tyler, TX 75701</p>
      </div>
    </div>
  </Layout>
)

export default ContactUs





