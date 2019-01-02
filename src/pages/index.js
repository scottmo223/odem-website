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
    <div style= {{ marginTop: `5%`, marginBottom: `6%` }}>
      <Carousel />
    </div>
    <hr />
    <h1>Our Mission</h1>
    <p>Our mission is to encourage local churches all over the nation, by training and supporting
them through evangelism and discipleship, to achieve the Great Commission.</p>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`  }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
