import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="About ODEM" />
    <h1>ODEM's Mission</h1>
    <p>Our mission is to encourage churches in several nations, by support and training in evangelism and discipleship, to achieve the Great Commission.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
