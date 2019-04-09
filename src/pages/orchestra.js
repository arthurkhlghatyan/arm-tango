import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import OrchestraImg from '../images/orchestra.jpg';
import FernandoSanchezImg from '../images/fernando-sanchez.jpg';
import HugoSatorreImg from '../images/hugo-satorre.jpg';

const Orchestra = () => (
  <Layout>
    <SEO
      title="Orchestra"
      keywords={[`tango`, `#ArmTangoFest2019`, `orchestra`]}
    />
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Orchestra</h1>
        <p className="lead text-muted">
          See orchestra
        </p>
      </div>
    </section>
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                alt="Thumbnail [100%x225]"
                style={{ height: 225, width: '100%', display: 'block' }}
                data-holder-rendered="true"
                src={OrchestraImg}
              />
              <div className="card-body">
                <p className="card-text">
                  <strong>
                    Armenian National Philharmonic Orchestra
                  </strong>
                </p>
                <p className="card-text">
                  The Armenian National Philharmonic Orchestra (ANPO) was founded in 1925 by Arshak Adamyan and Alexander Spendiaryan. For many years it has been considered as one of the leading orchestras of the former Soviet Union.
                  Today, it is a national center of the professional orchestral music in Armenia.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Read More</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Watch Video</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                alt="Thumbnail [100%x225]"
                style={{ height: 225, width: '100%', display: 'block' }}
                data-holder-rendered="true"
                src={HugoSatorreImg}
              />
              <div className="card-body">
                <p className="card-text">
                  <strong>
                    Hugo Satorre
                  </strong>
                </p>
                <p className="card-text">
                  Hugo Satorre has performed in some of the most prestigious theatre and concert halls throughout the world. Some worth noting are: the Sydney Opera House (Australia), The Esplanade (Singapore), the Walt Disney Hall (Los Angeles), el Teatro Colón (Buenos Aires), the Shanghai Oriental Art Center (Shanghai).
                  In March 2012 he accompanied tenor Placido Domingo on a stage set up in the widest avenue in Buenos Aires, 9 de Julio Av., in front of 120,000 people.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Read More</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Watch Video</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                alt="Thumbnail [100%x225]"
                style={{ height: 225, width: '100%', display: 'block' }}
                data-holder-rendered="true"
                src={FernandoSanchezImg}
              />
              <div className="card-body">
                <p className="card-text">
                  <strong>
                    Fernando Sanchez
                  </strong>
                </p>
                <p className="card-text">
                  Fernando Sánchez was born in Buenos Aires in 1980 and began his guitar studies with private teachers.
                  In 2008, he graduated from Conservatorio Superior de Música “Astor Piazzolla” of  Buenos Aires as a Guitar and Music Teacher.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Read More</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Watch Video</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Orchestra;
