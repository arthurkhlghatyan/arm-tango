import React, { Fragment } from 'react';
import Image02 from '../images/tango-poster.png';
import Image03 from '../images/03.jpg';

const HomeSections = () => (
  <Fragment>
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="p-5">
              <a href={Image02} target="_blank">
                <img className="img-fluid" src={Image02} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-12 text-center">
            <div className="p-5">
              <h2 className="display-4">Argentine Tango Festival</h2>
              <div className="text-left">
                <p>
                  Maestros, tangueras, tangueros, and DJs from all over the world will join us for this inaugural Tango Festival in Armenia – the ancient land at the crossroads of East and West. The festival includes two weekends of workshops, milongas, after-parties, and guided tours of the capital city and the regions. 
                </p>
                <p>
                  The opening milonga will take place on the rooftop of the beautiful boutique hotel, Fourteenth Floor, in the heart of Yerevan. We will dance in the fresh air and beautiful sunset till midnight. The next three days will be filled with workshops, milongas, and tours throughout Armenia. There will be a special trip to Shorja, Sevan for an Armenian barbeque. Finally, in one of the most beautiful regions of the country – Tsakhkadzor – we will continue with workshops and our gala milonga at the Grand Sports Complex.
                </p>
                <p>
                  We have full package from 21st - 30th of June, but if you are planning to come only one weekend, you can choose between the following options in Yerevan or in Tsakhkadzor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="p-5">
              <iframe
                width="100%"
                height="592"
                border="0"
                src="https://www.youtube.com/embed/gjEFDYyryiw" />
            </div>
          </div>
          <div className="col-lg-12 text-center">
            <div className="p-5">
              <h2 className="display-4">About Armenia</h2>
              <div className="text-left">
                <p>
                  Armenia's landscapes offer boundless beauty. Seven main landscape types are represented across the different altitudinal zones of Armenia. Across these desert, semi desert, dry steppe, steppe, woodland, sub alpine and alpine zones is geography as diverse as high mountain peaks, fertile valleys, picturesque land formations, basalt columns, rock sculptures, and waterfalls. More than 200 rivers and streams traverse Armenia, with steep falls, rapids and swift currents. Armenia has 5 scenic canyons. In addition, there are over 200 therapeutic mineral springs, differing in composition and temperature.
                </p>
                <p>
                  Armenians love music, and they have been creating exquisite compositions for centuries. Sharakans are traditional Armenian liturgical songs, which are experiencing a revival today. Distinctive musical instruments are used to play Armenian folk songs. Sayat Nova, Komitas, and Aram Khachaturian are among Armenia's best-known musicians and composers. Contemporary music comes in the forms of jazz and pop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
);

export default HomeSections;
