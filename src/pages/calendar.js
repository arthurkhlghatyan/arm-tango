import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Floor14thImg from '../images/14th-floor.jpg';

const Schedule = () => (
  <Layout>
    <SEO
      title="Calendar"
      keywords={[`tango`, `#ArmTangoFest2019`, `calendar`]}
    />
    <section className="jumbotron">
      <div className="container">
        <h1 className="jumbotron-heading text-center">Calendar</h1>
        <div className="agenda">
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Event</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="agenda-date active" rowSpan="1">
                  <div className="dayofmonth">21</div>
                  <div className="dayofweek">Friday</div>
                  <div className="shortdate text-muted">June, 2019</div>
                </td>
                <td className="agenda-time">
                  7:00 PM - 11:45 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Opening Milonga
                  </div>
                </td>
              </tr>        
              <tr>
                <td className="agenda-date active" rowSpan="6">
                  <div className="dayofmonth">22</div>
                  <div className="dayofweek">Saturday</div>
                  <div className="shortdate text-muted">June, 2019</div>
                </td>
                <td className="agenda-time">
                  10:00 AM - 11:15 AM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Make the walk great again (Yuliana & Dominic) 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  11:15 AM - 12:30 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Boleos & Friends (Yuliana & Dominic) 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  2:30 PM - 3:45 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Embrace as a basic for tango (Tatiana & Pavel) 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  4:00 PM - 5:15 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Rhythm Sequences (Luca Lamberti) 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  7:00 PM - 9:00 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Concert and tango shows in Philarmonic 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  9:00 PM - 11:45 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Milonga
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-date active" rowSpan="5">
                  <div className="dayofmonth">23</div>
                  <div className="dayofweek">Sunday</div>
                  <div className="shortdate text-muted">June, 2019</div>
                </td>
                <td className="agenda-time">
                  10:00 AM - 11:15 AM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Connection, Embrace walking (Ronen & Dorit) 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  11:15 AM - 12:30 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Paradas into a change of direction (Ronen & Dorit) 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  2:30 PM - 3:45 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Milonga class (Luca Lamberti) 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  4:00 PM - 5:15 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Body language as a key to your best tango (Luca Lamberti) 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  7:00 PM - 1:00 AM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Gala dinner and milonga 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-date active" rowSpan="5">
                  <div className="dayofmonth">24</div>
                  <div className="dayofweek">Monday</div>
                  <div className="shortdate text-muted">June, 2019</div>
                </td>
                <td className="agenda-time">
                  9:00 AM - 2:00 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Tour to Khor Virap - Zvartnots - Etchmiadzin
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  3:00 AM - 4:15 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Milonga con Onda (Yuliana & Dominic) 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  4:15 PM - 5:30 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Stylish "Alternative" Sequences (Yuliana & Dominic) 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  6:00 PM - 7:00 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Horse riding 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  7:00 PM - 1:00 AM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Dinner and Milonga
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-date active" rowSpan="6">
                  <div className="dayofmonth">25</div>
                  <div className="dayofweek">Tuesday</div>
                  <div className="shortdate text-muted">June, 2019</div>
                </td>
                <td className="agenda-time">
                  9:00 AM - 2:00 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Tour to Garni/Geghard
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  3:00 AM - 4:15 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Musicality (Luca Lamberti) 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  4:15 PM - 5:30 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Women technique (Tatiana Gordinscaya) 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  7:30 PM - 8:45 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Out of Axis - Colgadas (Ronen & Dorit)
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  8:45 PM - 10:00 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Out of Axis - Volcadas (Ronen & Dorit)
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  10:00 PM - 1:00 AM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Milonga in Kangar
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-date active" rowSpan="1">
                  <div className="dayofmonth">26</div>
                  <div className="dayofweek">Wednesday</div>
                  <div className="shortdate text-muted">June, 2019</div>
                </td>
                <td className="agenda-time">
                  9:00 AM - Full Day
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Tour to Enokavan/Lastiver
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-date active" rowSpan="6">
                  <div className="dayofmonth">27</div>
                  <div className="dayofweek">Thursday</div>
                  <div className="shortdate text-muted">June, 2019</div>
                </td>
                <td className="agenda-time">
                  Full Day
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Shorja
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  10:00 AM - 11:15 AM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Flow resistance (Sona Pogossian and Arman Tango)
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  11:15 AM - 12:30 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Spirals (Sona Pogossian and Arman Tango)
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  3:00 PM - 4:15 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Sacadas Chain (Ronen & Dorit) 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  4:15 PM - 5:30 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Dynamics of Boleo (Ronen & Dorit) 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  9:00 PM - 12:30 AM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Milonga 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-date active" rowSpan="2">
                  <div className="dayofmonth">28</div>
                  <div className="dayofweek">Friday</div>
                  <div className="shortdate text-muted">June, 2019</div>
                </td>
                <td className="agenda-time">
                  10:00 AM - 7:00 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Dilijan - Parz lake
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  9:00 PM - 12:00 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Milonga in Tsakhkadzor
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-date active" rowSpan="5">
                  <div className="dayofmonth">29</div>
                  <div className="dayofweek">Saturday</div>
                  <div className="shortdate text-muted">June, 2019</div>
                </td>
                <td className="agenda-time">
                  10:00 AM - 11:15 AM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    La caminada (Yuliana & Dominic) 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  11:15 AM - 12:30 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    La Caderas (Yuliana & Dominic) 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  2:30 PM - 3:45 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    4 dimensions in tango improvisation (Mihran Sigaher) 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  4:00 PM - 5:15 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Transfiguration for complex figures (Mihran Sigaher) 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  9:00 PM - 12:45 AM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Milonga 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-date active" rowSpan="5">
                  <div className="dayofmonth">30</div>
                  <div className="dayofweek">Sunday</div>
                  <div className="shortdate text-muted">June, 2019</div>
                </td>
                <td className="agenda-time">
                  10:00 AM - 11:15 AM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Giros! Tunning to both directions (Ronen & Dorit)
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  11:15 AM - 12:30 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Ganchos made out of dynamic places (Ronen & Dorit) 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  2:30 PM - 3:45 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Sacadas (Yuliana & Dominic) 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  4:00 PM - 5:15 PM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Colgadas (Yuliana & Dominic) 
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenda-time">
                  7:00 PM - 2:00 AM
                </td>
                <td className="agenda-events">
                  <div className="agenda-event">
                    Gala dinner (Asado) and Gala milonga 
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
);

export default Schedule;
