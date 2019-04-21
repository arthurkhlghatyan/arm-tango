import { graphql } from 'gatsby';

export const thumbnailImage = graphql`
  fragment thumbnailImage on File {
    childImageSharp {
      fluid(maxWidth: 508, maxHeight: 400) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`
