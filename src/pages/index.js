import React from 'react'
//import { Container } from 'reactstrap'
//import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Carousel from '../components/carousel'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`ODEM`, `missions`, `evangelism`]} />
    <div style= {{ margin: `5rem 0rem`, maxHeight: `400px` }}>
      <Carousel />
    </div>
    <hr />
    <div style={{ margin: `5rem 3rem` }}>
      <h1>Our Mission</h1>
      <p>Our mission is to encourage churches in several nations, by support and training in evangelism and discipleship, to achieve the Great Commission.</p>
    </div>
    <hr />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    
  </Layout>
)

export default IndexPage
