import React, { Component } from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import Services from "../components/Home/Services";
import { graphql } from "gatsby";
import Tours from "../components/Tours/Tours";

export default class tours extends Component {
  render() {
    return (
      <Layout>
        <StyledHero img={this.props.data.tourBcg.childImageSharp.fluid} />
        <Tours />
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    tourBcg: file(relativePath: { eq: "tours_3.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
