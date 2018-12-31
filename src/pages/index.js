import React from 'react'
//import { Container } from 'reactstrap'
//import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Carousel from '../components/carousel'
import '../components/index.css'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`ODEM`, `missions`, `evangelism`]} />
    <Carousel/>
    <h1>Hello</h1>
    <p>And Welcome to our site.</p>
    <p>It is currently under development.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
