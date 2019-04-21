import React from 'react';

const Jumbotron = ({ title, description, children }) => (
  <section className="jumbotron text-center">
    <div className="container">
      <h1 className="jumbotron-heading">{title}</h1>
      <p className="lead text-muted">
        {description}
      </p>
    </div>
    {children}
  </section>
);

export default Jumbotron;
