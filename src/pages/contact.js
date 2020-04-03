import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Contact from "../components/contact/Contact";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import Services from "../components/Home/Services";
import { graphql } from "gatsby";

export default function contact({ data }) {
  return (
    <Layout>
      <StyledHero img={data.contactBcg.childImageSharp.fluid} />
      <Contact />
    </Layout>
  );
}

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
