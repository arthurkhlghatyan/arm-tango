import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Jumbotron from '../components/jumbotron';

const WorkshopTopics = () => (
  <Layout>
    <SEO
      title="Workshop Topics"
      keywords={[`tango`, `#ArmTangoFest2019`, `workshop`, `topics`]}
    />
    <Jumbotron
      title="Workshop Topics"
      description="Explore workshop topics by your experience level">
      <h5 className="mt-5 mb-5">Yuliana Basmajyan and Dominic Bridge</h5>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Beginners</th>
            <th scope="col">Intermediate</th>
            <th scope="col">Advanced</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                Make the walk Great again
              </p>
              <p>
                La Caminada
              </p>
            </td>
            <td>
              <p>
                Las Caderas
              </p>
              <p>
                Sacadas
              </p>
              <p>
                Milonga con Onda
              </p>
              <p>
                Boleoes and friends
              </p>
            </td>
            <td>
              <p>
                Stylish "Alternative" Sequences
              </p>
              <p>
                Colcadas
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h5 className="mt-5 mb-5">Ronen Khayat and Dorit Shalom</h5>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Beginners</th>
            <th scope="col">Intermediate</th>
            <th scope="col">Advanced</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                Tango Itself- Connection, embrace, walking.    
              </p>
              <p>
                Paradas into a change of direction.
              </p>
            </td>
            <td>
              <p>
                Sacadas Chain- for Leaders and Followers
              </p>
              <p>
                Giros! Turnning to both directions.
              </p>
              <p>
                Dynamics of Boleo
              </p>
            </td>
            <td>
              <p>
                Out of Axis 1- Colgadas
              </p>
              <p>
                Out of Axis 2- Volcadas
              </p>
              <p>
                Ganchos made out of dynamic places
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h5 className="mt-5 mb-5" />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Mihran Sigaher</th>
            <th scope="col">Luca Lamberti</th>
            <th scope="col">Tatiana Gordinscaya and Pavel Lozan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                4 dimensions in tango improvisation
              </p>
              <p>
                Transfiguration for complex figures
              </p>
            </td>
            <td>
              <p>Musicality</p>
              <p>Rhythm sequences</p>
              <p>Milonga</p>
            </td>
            <td>
              <p>Embrace as a basic for tango</p>
              <p>Body language as a key to your best tango</p>
              <p>Women&#39;s technique</p> 
            </td>
          </tr>
        </tbody>
      </table>
    </Jumbotron>
  </Layout>
);

export default WorkshopTopics;
