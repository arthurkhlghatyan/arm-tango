import React, { Fragment } from 'react';
import Image02 from '../images/home-section-background.jpg';
import Image03 from '../images/03.jpg';

const HomeSections = () => (
  <Fragment>
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center">
            <div className="p-5">
              <h2 className="display-4">Argentine Tango Festival</h2>
              <div className="text-left">
                <p>
                  Maestros, tangueras, tangueros, and DJs from all over the world will join us for this inaugural Tango Festival in Armenia – the ancient land at the crossroads of East and West. The festival includes two weekends of workshops, milongas, after-parties, and guided tours of the capital city and the regions. 
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4">
            <div>
              <img className="img-fluid" src={Image02} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center">
            <div className="p-5">
              <h2 className="display-4">About Armenia</h2>
              <div className="text-left">
                <p>
                  Armenia's landscapes offer boundless beauty. Seven main landscape types are represented across the different altitudinal zones of Armenia. Across these desert, semi desert, dry steppe, steppe, woodland, sub alpine and alpine zones is geography as diverse as high mountain peaks, fertile valleys, picturesque land formations, basalt columns, rock sculptures, and waterfalls. More than 200 rivers and streams traverse Armenia, with steep falls, rapids and swift currents. 
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-5">
              <iframe
                width="100%"
                height="300"
                border="0"
                src="https://www.youtube.com/embed/gjEFDYyryiw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
);

export default HomeSections;
