import { graphql } from 'gatsby';

export const galleryImage = graphql`
  fragment galleryImage on File {
    childImageSharp {
      fluid(maxWidth: 688, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;
