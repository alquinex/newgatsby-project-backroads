import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getSiteMetadata = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const Header = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(getSiteMetadata)
  return (
    <div>
      <h1> title: {siteMetadata.title} </h1> <h1> author: {siteMetadata.author} </h1>
    </div>
  )
}

export default Header
