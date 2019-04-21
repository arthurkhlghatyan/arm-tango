import React from 'react';
import Img from 'gatsby-image';

const GridItem = ({
  slug,
  title,
  description,
  thumbnailFluid,
  hasVideos,
  onReadMoreClick,
  onSeePhotosClick,
  onWatchVideosClick,
}) => {
  const readMoreClick = () => {
    onReadMoreClick(slug);
  };

  const seePhotosClick = () => {
    onSeePhotosClick(slug);
  };

  const watchVideosClick = () => {
    onWatchVideosClick(slug);
  }

  const videoButton = hasVideos ? (
    <button
      type="button"
      className="btn btn-sm btn-outline-secondary"
      onClick={watchVideosClick}>
      Watch Video
    </button>
  ) : null;

  return (
    <div className="col-lg-4">
      <div className="card mb-4 box-shadow">
        <Img
          className="card-img-top"
          alt={title}
          style={{ width: '100%', display: 'block' }}
          data-holder-rendered="true"
          fluid={thumbnailFluid}
        />
        <div className="card-body">
          <p className="card-text">
            <strong>
              {title} 
            </strong>
          </p>
          <p className="card-text">
            {description}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={readMoreClick}>
                Read More
              </button>
              <button
                onClick={seePhotosClick}
                type="button"
                className="btn btn-sm btn-outline-secondary">
                See Photos
              </button>
              {videoButton}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
