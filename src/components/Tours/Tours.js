import React from "react";
import TourList from "./TourList";
import { useStaticQuery, graphql } from "gatsby";

const getTours = graphql`
  query {
    tours: allContentfulTours {
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

const Tours = () => {
  const { tours } = useStaticQuery(getTours);
  return <TourList tours={tours} />;
};

export default Tours;
