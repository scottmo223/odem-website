import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="About ODEM" />
    <h1>ODEM's Mission</h1>
    <p>Bring the message of Jesus to the nations.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
