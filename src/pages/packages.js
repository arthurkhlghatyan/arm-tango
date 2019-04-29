import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Jumbotron from '../components/jumbotron';
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
    <Jumbotron title="Packages" description="Yerevan packages">
      <div className="container mb-3 text-center">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">
                  Yerevan milongas
                </h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">€65</h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Grand Opening milonga</li>
                  <li>Saturday milonga</li>
                  <li>Grand Gala milonga</li>
                  <li>Jockey Restaurant milonga</li>
                  <li>Kangar milonga</li>
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
          <div className="col-lg-4">
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">
                  Yerevan Weekend Package
                </h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">€125</h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Grand Opening milonga</li>
                  <li>Saturday milonga</li>
                  <li>Grand Gala milonga</li>
                  <li>3 workshops</li>
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
          <div className="col-lg-4">
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">
                  Yerevan Full Package
                </h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">€345</h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Grand Opening milonga</li>
                  <li>Saturday milonga</li>
                  <li>Grand Gala milonga</li>
                  <li>Jockey Restaurant milonga</li>
                  <li>Kangar milonga</li>
                  <li>7 workshops</li>
                  <li>2 days tour with their lunches</li>
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
      </div>
      <p className="lead text-muted">
        Full Packages
      </p>
      <div className="container mb-3 text-center">
        <div className="row">
          <div className="col-lg-4">
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
          </div>
          <div className="col-lg-4">
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Full Budget</h4>
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
          </div>
          <div className="col-lg-4">
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Full Special</h4>
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
      </div>
    </Jumbotron>
  </Layout>
);

export default Packages;
