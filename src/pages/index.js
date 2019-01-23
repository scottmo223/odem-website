import React from 'react'
import { Container } from 'reactstrap'
//import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import HeaderImage from '../components/headerImage'
import SEO from '../components/seo'
import Carousel from '../components/carousel'
import Social from '../components/social'


const IndexPage = () => (
  <Layout>
    <SEO title="Odem Missions" keywords={[`ODEM`, `missions`, `evangelism`]} />
    <div style={{position: 'relative'}}>
      <HeaderImage />
      <h1 style={{ position: 'absolute', top: '50%', left: '50%', fontWeight: 'bold', fontSize: '3.7em', transform: 'translate(-50%, -52%)', width: 'fit-content'}} className='text-dark'>Open Doors Evangelistic Ministries</h1>
    </div>
    <Container>
      <div style={{ margin: '4rem auto', maxWidth: '350px' }}>
        <h1>Social Media</h1>
        <p>Follow our social media for current events</p>
        <Social />
      </div>
      <hr />
      <div style= {{ margin: `5rem 0rem` }}>
        <Carousel />
      </div>
      <hr />
      <div style={{ margin: `5rem 4rem 5rem 3rem` }}>
        <h1>Our Mission</h1>
        <p>Our mission is to encourage churches in several nations, by support and training in evangelism and discipleship, to achieve the Great Commission.</p>
      </div>
      <hr />
        <div style={{ maxWidth: `400px`, margin: '4rem auto' }}>
          <Image />
        </div>
    </Container>
  </Layout>
)

export default IndexPage
