import React, { Fragment } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Jumbotron from '../components/jumbotron';
import calendarData from '../data/calendar';

const renderCalendar = (calendar) => {
  const renderDinner = (dinner) => {
    const { time, title, included } = dinner;

    return (
      <Fragment>
        <td className="agenda-time">
          {time}
        </td>
        <td className="agenda-events">
          <div className="text-left agenda-event">
            <p>{title}</p>
            <p>Included: {included}</p>
          </div>
        </td>
      </Fragment>
    );
  };

  const renderWorkshop = (workshop) => {
    const { time, title, maestros } = workshop;

    return (
      <Fragment>
        <td className="agenda-time">
          {time}
        </td>
        <td className="agenda-events">
          <div className="text-left agenda-event">
            <p>Workshop: {title}</p>
            <p>Maestro(s): {maestros}</p>
          </div>
        </td>
      </Fragment>
    );
  };

  const renderEvent = (event) => {
    const {
      time,
      title,
      maestros,
      included,
      isImportant,
    } = event;
    const boldClass = isImportant ? 'font-weight-bold' : '';

    if (typeof maestros !== 'undefined') {
      return renderWorkshop(event);
    }

    if (typeof included !== 'undefined') {
      return renderDinner(event);
    }

    return (
      <Fragment>
        <td className={`agenda-time ${boldClass}`}>
          {time}
        </td>
        <td className="agenda-events">
          <div className={`text-left agenda-event ${boldClass}`}>
            {title}
          </div>
        </td>
      </Fragment>
    );
  };

  const mapEvent = (item, index) => {
    return (
      <tr key={index}>
        {renderEvent(item)}
      </tr>
    );
  };

  const mapDate = (item, index) => {
    const { date, events } = item;
    const length = events.length;
    const firstEvent = events.shift();

    return (
      <Fragment key={index}>
        <tr>
          <td className="agenda-date active" rowSpan={length}>
            <div className="dayofmonth">{date.day}</div>
            <div className="dayofweek">{date.dayofweek}</div>
            <div className="shortdate text-muted">{date.shortdate}</div>
          </td>
          {renderEvent(firstEvent)}
        </tr>
        {events.map(mapEvent)}
      </Fragment>
    );
  };

  return calendar.map(mapDate);
};

const Schedule = () => (
  <Layout>
    <SEO
      title="Calendar"
      keywords={[`tango`, `#ArmTangoFest2019`, `calendar`]}
    />
    <Jumbotron title="Calendar" description="See detailed event schedule">
      <div className="agenda">
        <table className="table">
          <tbody>
            <tr>
              <th className="date-header">Date</th>
              <th className="text-left">Time</th>
              <th className="text-left">Event</th>
            </tr>
            {renderCalendar(calendarData)}
          </tbody>
        </table>
      </div>
    </Jumbotron>
  </Layout>
);

export default Schedule;
