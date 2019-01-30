import React from 'react'
import { Container } from 'reactstrap'
//import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import HeaderImage from '../components/headerImage'
import SEO from '../components/seo'
import Carousel from '../components/carousel'
import Social from '../components/social'


export default ({data}) => {
  return (
    <Layout>
      <SEO title="Odem Missions" keywords={[`ODEM`, `missions`, `evangelism`]} />
      
      <div style={{position: 'relative', marginBottom: '4rem',}}>
        <HeaderImage />
        <h1 style={{ position: 'absolute', top: '50%', left: '50%', fontWeight: 'bold', fontSize: '3.7em', transform: 'translate(-50%, -52%)', width: 'fit-content'}} className='text-dark'>Open Doors Evangelistic Ministries</h1>
      </div>

      <Container>
        
        <div className='d-flex flex-column flex-sm-row justify-content-sm-around align-items-center align-items-sm-stretch'>
          <div className='card mb-5 mb-sm-0' style={{width: '18rem', height: '13rem'}}>
            <h4 className='card-title text-white bg-secondary mb-3 p-2'>Social Media</h4>
            <p className='card-text'>Follow our social media for current events</p>
            <Social />
          </div>
          <div className='card' style={{width: '18rem'}}>
            <h4 className='card-title text-white bg-secondary mb-3 p-2'>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h4>
            <span className='align-items-left' dangerouslySetInnerHTML={{__html: `${data.allMarkdownRemark.edges[0].node.html}`}} />
          </div>
        </div>

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
}


export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "events"}}}) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`