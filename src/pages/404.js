import React from "react";
import Layout from "../components/layout";
import Img from "gatsby-image";

const NotFoundPage = ({ data }) => {
  console.log(data);
  const errorPic = data.file1;

  return (
    <Layout
      errorPic={errorPic}
      children={
        <React.Fragment>
          <section className="section hero is-fullheight gradientBg-error">
            <div className="container">
              <h1 className="title has-text-centered is-size-1">RUT ROH</h1>
              <h2 className="subtitle has-text-centered is-size-3">
                You just hit a route that doesn&#39;t exist
              </h2>
              <h2 className="subtitle has-text-centered is-size-3">
                <a className="button is-large is-link" href="/">
                  back to Joe's site
                </a>
              </h2>
              <div className="tile is-ancestor">
                <div className="tile is-2"></div>
                <div className="tile is-8">
                  <article className="tile is-child">
                    <figure className="image">
                      <Img
                        fluid={errorPic.childImageSharp.fluid}
                        alt="error_pic"
                      />
                    </figure>
                  </article>
                </div>
                <div className="tile is-2"></div>
              </div>
            </div>
          </section>
        </React.Fragment>
      }
    ></Layout>
  );
};

export const projectsQuery = graphql`
  query Picture {
    file1: file(relativePath: { eq: "error-pic.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default NotFoundPage;
