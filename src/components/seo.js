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
import { withPrefix } from "gatsby"

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
          href: withPrefix("/lib/bootstrap/css/bootstrap.min.css"),
          rel: `stylesheet`,
        },
        {
          href: withPrefix("lib/font-awesome/css/font-awesome.min.css"),
          rel: `stylesheet`,
        },
        {
          href: withPrefix("lib/animate/animate.min.css"),
          rel: `stylesheet`,
        },
        {
          href: withPrefix("lib/ionicons/css/ionicons.min.css"),
          rel: `stylesheet`,
        },
        {
          href: withPrefix("lib/owlcarousel/assets/owl.carousel.min.css"),
          rel: `stylesheet`,
        },
        {
          href: withPrefix("lib/lightbox/css/lightbox.min.css"),
          rel: `stylesheet`,
        },
      ]}
      script={[
        {
          src: `https://code.jquery.com/jquery-3.5.1.min.js`,
          rel: `script`,
        },
        {
          src: withPrefix("lib/jquery/jquery-migrate.min.js"),
          rel: `script`,
        },
        {
          src: withPrefix("lib/popper/popper.min.js"),
          rel: `script`,
        },
        {
          src: withPrefix("lib/bootstrap/js/bootstrap.min.js"),
          rel: `script`,
        },
        {
          src: withPrefix("lib/easing/easing.min.js"),
          rel: `script`,
        },
        {
          src: withPrefix("lib/counterup/jquery.waypoints.min.js"),
          rel: `script`,
        },
        {
          src: withPrefix("lib/counterup/jquery.counterup.js"),
          rel: `script`,
        },
        {
          src: withPrefix("lib/owlcarousel/owl.carousel.min.js"),
          rel: `script`,
        },
        {
          src: withPrefix("lib/lightbox/js/lightbox.min.js"),
          rel: `script`,
        },
        {
          src: withPrefix("lib/typed/typed.min.js"),
          rel: `script`,
        },
        {
          src: withPrefix("contactform/contactform.js"),
          rel: `script`,
        },
        {
          src: withPrefix("js/main.js"),
          rel: `script`,
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
