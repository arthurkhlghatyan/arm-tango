import Img from 'gatsby-image';

export default ({ data }) => {
  return (
    <Img fluid={data.file.imageSharp.fluid} />
  );
}
