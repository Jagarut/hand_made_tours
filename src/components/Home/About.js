import React from "react";
import Title from "../Title";
import styles from "../../css/about.module.css";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const getAboutImage = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "foto-masequera.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const About = () => {
  const { aboutImage } = useStaticQuery(getAboutImage);
  return (
    <section className={styles.about}>
      <Title title="my" subtitle="story" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} alt="about me pic" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>meet your guide</h4>
          <p>Once upon of time a beautiful princess... Jajaja.</p>
          <p>What a nice story that could be... </p>
          <p>
            Jokes appart, I suppose if you are reading this, is because you want
            to know a little about me... an average girl from a beautiful
            Island, that I didn´t get to apreciate until recent years.
          </p>
          <p>
            Now I know that I was in need of diversity, a way to scape the
            routine that dayly life impose on us.
          </p>
          <p>
            It all started when I left Gran Canaria at the tender age of 23.
            With my head full of dreams, I wanted to travel the world, get to
            know different people from different cultures and different ways to
            look at live.
          </p>
          <p>
            To get to know another human being, the first step is to be able to
            comunicate... so I moved to London with one the goal. To learn
            English -the international language-
          </p>
          <p>
            Yeap that was the first step in a long journey... A one-way ticket
            and luggage full of illusions. Long story short... I stayed five
            years --plenty of memories and anecdotes-- sorry, I just got
            emotional remembering.
          </p>
          {/* <p>
            I studied an HND in Marketing and Advertising at the London School
            of Communication and there I had the chance to meet some wonderful
            people from all over the world. The City was surprisingly rich in
            world cuisine restaurants and it taught me how to be a good
            traveler. I learnt to save money while jumping from one place to
            another.
          </p> */}
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
