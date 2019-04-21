import React from 'react';

const GridLayout = ({ children }) => {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          {children}
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
