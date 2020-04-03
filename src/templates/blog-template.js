import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styles from "../css/single-blog.module.css";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Blog = ({ data }) => {
  const {
    title,
    published,
    text: { json },
    image,
  } = data.post;

  // const options = {
  //   renderNode: {
  //     "embedded-asset-block": node => {
  //       console.log(node);
  //       return (
  //         <div className="rich">
  //           <img width="400" src={node.data.target.fields.file} />
  //         </div>
  //       );
  //     },
  //   },
  // };

  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <Img className={styles.foto} fluid={image.fluid} />
          <h1>{title}</h1>
          <h4>published at: {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json)}
          </article>

          <AniLink fade to="/blog" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query getPost($slug: String) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      text {
        json
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

export default Blog;
