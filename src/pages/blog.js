import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import Services from "../components/Home/Services";
import { graphql } from "gatsby";
import BlogList from "../components/blog/BlogList";

const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />
      <BlogList />
    </Layout>
  );
};

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogImage.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default blog;
