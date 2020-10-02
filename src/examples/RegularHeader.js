import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { siteMetadata } from '../../gatsby-config'

const getSiteData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={(data) => {
        console.log(data)

        return (
          <div>
            <h2>title : {data.site.siteMetadata.title}</h2>
            <h2>author : {data.site.siteMetadata.author}</h2>
          </div>
        )
      }}
    />
  )
}

export default RegularHeader
