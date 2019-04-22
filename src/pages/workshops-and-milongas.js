import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Jumbotron from '../components/jumbotron';
import workshopsMilongasData from '../data/workshops-milongas';

const renderPackages = (workshopsMilongas) => {
  const map = (item, index) => {
    const { name, prices, isImportant } = item;
    const boldClass = isImportant ? 'font-weight-bold' : '';

    return (
      <tr key={index}>
        <th scope="row">{name}</th>
        <td className={boldClass}>€{prices[0]}</td>
        <td className={boldClass}>€{prices[1]}</td>
        <td className={boldClass}>€{prices[2]}</td>
      </tr>
    );
  };

  return workshopsMilongas.map(map);
};

const WorkshopsAndMilongas = () => (
  <Layout>
    <SEO
      title="Workshops and Milongas"
      keywords={[`tango`, `#ArmTangoFest2019`, `milongas`]}
    />
    <Jumbotron
      title="Workshops and milongas"
      description="Choose whatever works for you">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Workshops and Milongas</th>
            <th scope="col">Before 21st of April</th>
            <th scope="col">Before 21st of May</th>
            <th scope="col">Late reservation</th>
          </tr>
        </thead>
        <tbody>
          {renderPackages(workshopsMilongasData)}
        </tbody>
      </table>
    </Jumbotron>
  </Layout>
);

export default WorkshopsAndMilongas;
