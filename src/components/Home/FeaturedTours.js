import React from "react";
import Tour from "../Tours/Tour";
import { useStaticQuery, graphql } from "gatsby";
import Title from "../Title";
import styles from "../../css/items.module.css";
import Anilink from "gatsby-plugin-transition-link/AniLink";

const getTours = graphql`
  query {
    featuredTours: allContentfulTours(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          slug
          duration
          contentful_id
          languages
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const FeatuedTours = () => {
  const response = useStaticQuery(getTours);
  const tours = response.featuredTours.edges;

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(({ node }) => {
          return <Tour key={node.contentful_id} tour={node} />;
        })}
      </div>

      <Anilink fade to="/tours" className="btn-primary">
        all tours
      </Anilink>
    </section>
  );
};

export default FeatuedTours;
