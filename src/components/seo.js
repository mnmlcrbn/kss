/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
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
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
      link={[
        {
          href: `https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css`,
          rel: `stylesheet`,
        },
        {
          href: `https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css`,
          rel: `stylesheet`,
        },
        {
          href: `https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css`,
          rel: `stylesheet`,
        },
        {
          href: `https://cdnjs.cloudflare.com/ajax/libs/ionicons/5.0.0/css/ionicons.min.css`,
          rel: `stylesheet`,
        },
        {
          href: `https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css`,
          rel: `stylesheet`,
        },
        {
          href: `https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.1/js/lightbox.min.js`,
          rel: `stylesheet`,
        },
        {
          href: `https://use.typekit.net/ooe7wpt.css`,
          rel: `stylesheet`,
        },
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  link: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
}

export default SEO
