import React from "react";

import Layout from "../components/layout";

const IndexPage = ({ data }) => {
  const projects = data.allDataJson.edges[0].node.projects;
  let aboutPics = [];
  aboutPics.push(data.file1);
  aboutPics.push(data.file2);

  return <Layout projects={projects} aboutPics={aboutPics} />;
};

export const projectsQuery = graphql`
  query ProjectData {
    allDataJson {
      edges {
        node {
          projects {
            id
            project_name
            description
            technologies
            live_link
            github_link
            cover_image {
              src {
                publicURL
                relativePath
                absolutePath
                childImageSharp {
                  fluid {
                    aspectRatio
                    originalImg
                    originalName
                    presentationWidth
                    presentationHeight
                    sizes
                    src
                    srcSetWebp
                    srcSet
                    srcWebp
                    tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
    file1: file(relativePath: { eq: "bio-pic-1.JPG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    file2: file(relativePath: { eq: "bio-pic-2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
