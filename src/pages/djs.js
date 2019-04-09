import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import LucaLambertDj from '../images/luca-lambert-dj.jpg';
import MihranSigaherDj from '../images/mihran-sigaher.jpg';
import TatianaGordinscaya from '../images/tatiana-gordinscaya.jpg';

const DJS = () => (
  <Layout>
    <SEO
      title="DJs"
      keywords={[`tango`, `#ArmTangoFest2019`, `djs`]}
    />
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">DJs</h1>
        <p className="lead text-muted">
          Leading Tango DJs are going to participate.
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
                src={LucaLambertDj}
              />
              <div className="card-body">
                <p className="card-text">
                  <strong>
                    Luca Lamberti
                  </strong>
                </p>
                <p className="card-text">
                  Luca is a well known tango DJ, teacher, and dancer in the European tango circuit.
                  Luca has been around to Europe, middle East and Asia spreading his unique spiritual approach to tango.
                  Dancing since the year 2000 and studying with key tango world figures.
                  Luca has been the organizer of Tangocamp Italy since 2009 and a key figure in the other 3 tango camp festivals.
                  Organising also Roman holiday tango marathon in Rome.
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
                src={MihranSigaherDj}
              />
              <div className="card-body">
                <p className="card-text">
                  <strong>
                    Mihran Sigaher
                  </strong>
                </p>
                <p className="card-text">
                    From 2008 to the present, he has been playing music as a DJ in several Contacttango Istanbul Dance Company milongas such as the ones at Grand Local Pera,
                    Underground and Milonga Cordial and Milonga Tradicional until 2015.
                    He was the DJ at Daniel Melingo (who is a famous Argentinian electrotango singer) concert held in 2010 at “Ghetto” concert hall.
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
                src={TatianaGordinscaya}
              />
              <div className="card-body">
                <p className="card-text">
                  <strong>
                    Tatiana Gordinscaya
                  </strong>
                </p>
                <p className="card-text">
                    Tatiana was started to dance argentinian tango 8 years ago and at the moment she has felt that tango is a dance of her soul she decided to found first argentinian tango school in Moldova.
                    After she visited Buenos Aires, she decided that to put music on milongas is an art, and one part of this art is to create atmosphere of small Buenos Aires at the milonga.
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

export default DJS;
