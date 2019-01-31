import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({data}) => {
  return (
    <Layout>
      <SEO title="Donations" />
      <h1 style={{ margin: '4rem auto', fontWeight: 'bold', fontSize: '4em' }} className='text-dark'>{data.allMarkdownRemark.edges[0].node.frontmatter.heading}</h1>
      <hr />
      <p className="my-5"><span dangerouslySetInnerHTML={{__html: `${data.allMarkdownRemark.edges[0].node.html}`}} /></p>
      <hr />
      
      <div className="d-flex flex-column flex-sm-row justify-content-sm-around align-items-center align-items-sm-stretch">
      
        <div className="card border-dark my-3 my-sm-5" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">Pay Online</h5>
            <h6 className="card-subtitle mb-2 text-muted">PayPal</h6>
            <p className="card-text">{data.allMarkdownRemark.edges[0].node.frontmatter.description}</p>
            <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=K68GMA2X9A3TU&item_name=ODEM+Missions+2019&currency_code=USD&source=url" target="_blank" rel="noopener">
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <img alt="credit card options" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </a>
          </div>
        </div>
        
        <div className="card border-dark my-3 my-sm-5 mb-5" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">Pay by Mail</h5>
            <h6 className="card-subtitle mb-2 text-muted">Check</h6>
            <p className="card-text">Make checks payable to <br />"Chuck Perez"<br /><br />735 Barbara St<br />Tyler, TX 75701 </p>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "donation"}}}) {
      edges {
        node {
          frontmatter {
            title
            templateKey
            heading
            description
          }
          html
        }
      }
    }
  }
`





