import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Jumbotron from '../components/jumbotron';

const WorkshopsAndMilongas = () => (
  <Layout>
    <SEO
      title="Workshops and Milongas"
      keywords={[`tango`, `#ArmTangoFest2019`, `milongas`]}
    />
    <Jumbotron
      title="Workshops and milongas"
      description="Choose whatever works for you">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Workshops and Milongas</th>
            <th scope="col">Before 21st of April</th>
            <th scope="col">Before 21st of May</th>
            <th scope="col">Late reservation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Workshop prices</th>
            <td>€15</td>
            <td>€18</td>
            <td>€25</td>
          </tr>
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
            <th scope="row">Yerevan milongas + 3 workshops</th>
            <td>
              <strong>
                €75
              </strong>
            </td>
            <td>
              <strong>
                €90
              </strong>
            </td>
            <td>
              <strong>
                €120
              </strong>
            </td>
          </tr>
          <tr>
            <th scope="row">Yerevan milongas + 5 workshops</th>
            <td>
              <strong>
                €105
              </strong>
            </td>
            <td>
              <strong>
                €130
              </strong>
            </td>
            <td>
              <strong>
                €165
              </strong>
            </td>
          </tr>
          <tr>
            <th scope="row">Tsakhkadzor milongas + 4 workshops</th>
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
    </Jumbotron>
  </Layout>
);

export default WorkshopsAndMilongas;
