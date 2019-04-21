import React from 'react';

const HomeSection = ({ title, description, children }) => (
  <section>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center">
          <div className="p-5">
            <h2 className="display-4">{title}</h2>
            <div className="text-left">
              <p>
                {description}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-4">
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HomeSection;
