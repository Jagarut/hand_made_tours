import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        twitterUsername
        image
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getData);
  const { siteDesc, siteTitle, image, twitterUsername } = site.siteMetadata;
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={siteDesc} />
      <meta name="image" content={image} />
    </Helmet>
  );
};

export default SEO;
