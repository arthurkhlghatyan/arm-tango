import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from 'react-bootstrap/Container';

const captureBookNowClick = () => {
  getOutboundLink(
    'https://docs.google.com/forms/d/e/1FAIpQLSe8pL_3YiNJZbFwPC1gtCggzjHjid14rbZnDXJRYbFzYsBi_w/viewform'
  );
  return false;
};

const Packages = () => (
  <Layout>
    <SEO
      title="Packages"
      keywords={[`tango`, `#ArmTangoFest2019`, `armenia`]}
    />
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Packages</h1>
        <p className="lead text-muted">
          Explore packages
        </p>
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Tsakhkadzor Resort Weekend</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">€220</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>3 milongas + 4 workshops</li>
                <li>3 days/ 2 nights in the hotel</li>
                <li>Gala dinner with Asado bbq</li>
                <li>Breakfast/Lunch/Dinner</li>
                <li>City tour, Kecharis Monastery</li>
                <li>Transportation from Yerevan and back</li>
              </ul>
              <button
                onClick={captureBookNowClick}
                type="button"
                className="btn btn-lg btn-block btn-outline-primary">
                Book now
              </button>
            </div>
          </div>
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Budget Package</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">€770</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Tsakhkadzor resort weekend</li>
                <li>Yerevan Tango Festival</li>
                <li>3 milongas + 5 workshops</li>
                <li>Tango Tour 5 days</li>
                <li>7 milongas + 5 workshops</li>
              </ul>
              <button
                onClick={captureBookNowClick}
                type="button"
                className="btn btn-lg btn-block btn-outline-primary">
                Book now
              </button>
            </div>
          </div>
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Special Package</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">€960</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Everything in budget package</li>
                <li>Luxe/Superior rooms</li>
                <li>Airport pick up and drop off</li>
                <li>Pick up from hotel to milonga and the studios for workshops</li>
                <li>Horse riding</li>
              </ul>
              <button
                onClick={captureBookNowClick}
                type="button"
                className="btn btn-lg btn-block btn-outline-primary">
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Packages;
