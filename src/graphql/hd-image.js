import { graphql } from 'gatsby';

export const hdImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 1920, maxHeight: 1080) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`
