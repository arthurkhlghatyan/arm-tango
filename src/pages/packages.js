import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from 'react-bootstrap/Container';

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
              <h4 className="my-0 font-weight-normal">Budget Package</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">€685</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Yerevan Tango Festival</li>
                <li>3 milongas + 5 workshops</li>
                <li>Tango Tour(5 night/6 day)</li>
                <li>7 milongas + 5 workshops</li>
                <li>Tsakhkadzor resort weekend</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-outline-primary">Book now</button>
            </div>
          </div>
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Special Package</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">€875</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Everything in budget package</li>
                <li>Luxe rooms</li>
                <li>Airport pick up and drop off</li>
                <li>Pick up from hotel to milonga or the studios for workshops</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-outline-primary">Book now</button>
            </div>
          </div>
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Tsakhkadzor Resort Weekend</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">€195</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>3 milongas + 4 workshops</li>
                <li>3 days/ 2 nights in the hotel</li>
                <li>Gala dinner with Asado bbq</li>
                <li>3 times meals</li>
                <li>City tour, Kecharis Monastery</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-outline-primary">Book now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Workshops and milongas</h1>
        <p className="lead text-muted">
          Choose whatever works for you
        </p>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Workshops and Milongas</th>
              <th scope="col">Before April 21st</th>
              <th scope="col">Before Mar 21st</th>
              <th scope="col">Late reservation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Opening milonga(complimentary wine)</th>
              <td>€18</td>
              <td>€20</td>
              <td>€25</td>
            </tr>
            <tr>
              <th scope="row">Weekday milongas</th>
              <td>€5</td>
              <td>€7</td>
              <td>€10</td>
            </tr>
            <tr>
              <th scope="row">Weekend milongas</th>
              <td>€9</td>
              <td>€12</td>
              <td>€15</td>
            </tr>
            <tr>
              <th scope="row">Gala Milonga</th>
              <td>€27</td>
              <td>€30</td>
              <td>€35</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    
  </Layout>
);

export default Packages;
