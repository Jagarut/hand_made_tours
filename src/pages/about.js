import React, { Component } from "react";
import Layout from "../components/Layout";
import About from "../components/Home/About";

import { Link } from "gatsby";

import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import Services from "../components/Home/Services";
import { graphql } from "gatsby";

export default class about extends Component {
  render() {
    return (
      <Layout>
        <StyledHero img={this.props.data.aboutBcg.childImageSharp.fluid} />
        <About />
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    aboutBcg: file(relativePath: { eq: "norte.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
