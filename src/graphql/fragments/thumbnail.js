import { graphql } from 'gatsby';

export const thumbnail = graphql`
  fragment thumbnail on File {
    childImageSharp {
      fluid(maxWidth: 350, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;
