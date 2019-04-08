import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaViber,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-black">
    <Container>
      <Row>
        <Col sm={12} md={3} lg={3} className="mt-4 mb-1">
          <h5 className="font-weight-bold text-uppercase mb-4">
            #ArmTangoFest2019
          </h5>
          <p>First international tango festival in armenia.</p>
        </Col>
        <Col sm={12} md={3} lg={3} className="mt-4 mb-1">
          <h5 className="font-weight-bold text-uppercase mb-4">
            Contact
          </h5>
          <p>
            <FaEnvelope />
            &nbsp;
            arman.dashan@gmail.com
          </p>
          <p>
            <FaPhone />
            &nbsp;
            +374 95889933
          </p>
          <p>
            <FaViber />
            &nbsp;
            +374 95889933
          </p>
          <p>
            <FaWhatsapp />
            &nbsp;
            +374 95889933
          </p>
          <p>
            <FaFacebook />
            &nbsp;
            <a
              target="_blank"
              href="https://www.facebook.com/lavida.tango.yerevan">
              @lavida.tango.yerevan
            </a>
          </p>
        </Col>
      </Row>
    </Container>
    <div className="footer-copyright text-center py-3">
      <div>© 2019 Copyright: ArmTangoFest2019</div>
      <div>
        Developed by
        &nbsp;
        <a
          target="_blank"
          href="https://www.facebook.com/arthur.khlghatyan.1">Arthur</a>
      </div>
    </div>
  </footer>
);

export default Footer;
