import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

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
                src="https://photos.harstatic.com/136263279/hr/img-5.jpeg"
              />
              <div className="card-body">
                <p className="card-text">Info and image</p>
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
