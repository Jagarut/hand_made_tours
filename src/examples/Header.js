import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);
  const author = data.site.siteMetadata.author;
  return (
    <div>
      <h1>title: {data.site.siteMetadata.title}</h1>
      <h1>author: {author}</h1>
    </div>
  );
};

export default Header;
