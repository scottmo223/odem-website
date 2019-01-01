import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactUs = () => (
  <Layout>
    <SEO title="Contact Us" />
    <h1>Send us a message!</h1>
    <Link to="/">Go back to the homepage</Link>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdJBx2VN6FXNZI_NuRIsTKoyUZCCg-2ZIRd5jzB8pkkHUhkwg/viewform?embedded=true" width="640" height="1087" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
  </Layout>
)

export default ContactUs
