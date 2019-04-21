import { graphql } from 'gatsby';

export const hdImage = graphql`
  fragment hdImage on File {
    childImageSharp {
      fluid(maxWidth: 1920, maxHeight: 1100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`
