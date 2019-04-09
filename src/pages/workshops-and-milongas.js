import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const WorkshopsAndMilongas = () => (
  <Layout>
    <SEO
      title="Workshops and Milongas"
      keywords={[`tango`, `#ArmTangoFest2019`, `milongas`]}
    />
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

export default WorkshopsAndMilongas;
