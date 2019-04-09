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
              <th scope="row">Opening milonga</th>
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
            <tr>
              <th scope="row">Yerevan Milonga Package</th>
              <td>€30</td>
              <td>€35</td>
              <td>€40</td>
            </tr>
            <tr>
              <th scope="row">Tsakhkadzor Milonga Package</th>
              <td>€37</td>
              <td>€45</td>
              <td>€50</td>
            </tr>
            <tr>
              <th scope="row">Yerevan + Tsakhkadzor Milonga Package</th>
              <td>€55</td>
              <td>€65</td>
              <td>€85</td>
            </tr>
            <tr>
              <th scope="row">Yerevan milonga + 3 workshops</th>
              <td>€75</td>
              <td>€90</td>
              <td>€120</td>
            </tr>
            <tr>
              <th scope="row">Yerevan milonga + 5 workshops</th>
              <td>€27</td>
              <td>€30</td>
              <td>€35</td>
            </tr>
            <tr>
              <th scope="row">Tsakhkadzor milonga + 4 workshops</th>
              <td>€95</td>
              <td>€115</td>
              <td>€140</td>
            </tr>
            <tr>
              <th scope="row">Tsakhkadzor full package</th>
              <td>€195</td>
              <td>€220</td>
              <td>€270</td>
            </tr>
            <tr>
              <th scope="row">Budget full package</th>
              <td>€685</td>
              <td>€770</td>
              <td>€890</td>
            </tr>
            <tr>
              <th scope="row">Special full package</th>
              <td>€875</td>
              <td>€960</td>
              <td>€1080</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </Layout>
);

export default WorkshopsAndMilongas;
