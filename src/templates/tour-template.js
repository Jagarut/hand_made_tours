import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import StyledHero from "../components/StyledHero";
import styles from "../css/template.module.css";
import Img from "gatsby-image";
import {
  FaMoneyBillWave,
  FaClock,
  FaUserAlt,
  FaUserPlus,
  FaFlag,
  FaCalendarAlt,
  FaBus,
} from "react-icons/fa";
import Day from "../components/SingleTour/Day";
import AniLink from "gatsby-plugin-transition-link";

const Template = ({ data }) => {
  const {
    name,
    price,
    duration,
    minPeople,
    maxPeople,
    days,
    logistics,
    paquete: { paquete },
    insurance,
    description: { description },
    faq,
    images,
  } = data.tour;

  const [mainImage, ...tourImages] = images;

  return (
    <Layout>
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((item, index) => {
              if (index !== 1) {
                //un video se aloja en esa posición en contentful
                return (
                  <Img
                    key={index}
                    fluid={item.fluid}
                    alt="single tour"
                    className={styles.image}
                  />
                );
              }
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              <span style={{ fontWeight: "bold", paddingRight: "6px" }}>
                starting from:
              </span>
              {price} €
            </p>
            <p>
              <FaClock className={styles.icon} />
              <span style={{ fontWeight: "bold", paddingRight: "6px" }}>
                Duration:
              </span>
              {duration} aproximatelly
            </p>
          </div>
          <div className={styles.info}>
            <p>
              <FaUserAlt className={styles.icon} />
              <span style={{ fontWeight: "bold", paddingRight: "6px" }}>
                min people:
              </span>
              {minPeople}
            </p>
            <p>
              <FaUserPlus className={styles.icon} />
              <span style={{ fontWeight: "bold", paddingRight: "6px" }}>
                max people:
              </span>
              {maxPeople}
            </p>
          </div>
          <div className={styles.info}>
            <p>
              <FaFlag className={styles.icon} />
              <span style={{ fontWeight: "bold", paddingRight: "6px" }}>
                Languages:
              </span>
              Spanish and English
            </p>
          </div>
          <div className={styles.info}>
            <p>
              <FaBus className={styles.icon} />
              <span style={{ fontWeight: "bold", paddingRight: "6px" }}>
                Logistics:
              </span>
              {logistics}
            </p>
          </div>
          <h4>
            <FaCalendarAlt className={styles.icon} />
            {days}
          </h4>
          <p className={styles.desc}>{description}</p>

          <div>
            <h2>It includes</h2>
            <div>
              <p>
                -
                <span className={styles.espacio1}>
                  CHEESE FARM entrance + tastings
                </span>
              </p>
              <p className={styles.espacio2}>
                Meet the producer + See the process + Enjoy tasting
              </p>
              <p>
                -<span className={styles.espacio1}>WALK THE VINEYARDS</span>
              </p>
              <p className={styles.espacio2}>
                Understand the territory + Feel the magic sceneries.
              </p>
              <p>
                -<span className={styles.espacio1}>WINERY visit</span>
              </p>
              <p className={styles.espacio2}>
                Meet the producer + Comprehend the process + Drink its wine.
              </p>
            </div>
          </div>

          <div className={styles.journey}>
            <h2>FREQUENTLY ASKED QUESTIONS</h2>
            {faq.map((item, index) => {
              return (
                <Day
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              );
            })}
          </div>
          <AniLink fade to="/tours" className="btn-primary">
            back to tours
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

//*************************************************** */
// package is a reserved word, so changed for paquete
//*************************************************** */
export const query = graphql`
  query($slug: String!) {
    tour: contentfulTours(slug: { eq: $slug }) {
      name
      price
      duration
      minPeople
      maxPeople
      days
      logistics
      paquete: package {
        paquete: package
      }
      insurance
      description {
        description
      }
      faq {
        question
        answer
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

export default Template;
