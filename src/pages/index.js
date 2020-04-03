import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/Layout";

import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import Services from "../components/Home/Services";
import { graphql } from "gatsby";
import FeaturedTours from "../components/Home/FeaturedTours";
import SEO from "../components/SEO";
import CookieConsent from "react-cookie-consent";

export default ({ data }) => (
  <Layout>
    <SEO title="Home" description="get to know Gran Canaria" />
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="explore the hidden treasures"
        info="Become part of the chosen few allowed to enter this magical eden"
      >
        <AniLink fade to="/tours" className="btn-white">
          explore tours
        </AniLink>
      </Banner>
    </StyledHero>
    <Services />
    <FeaturedTours />
    <CookieConsent>
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  </Layout>
);

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "mase.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
