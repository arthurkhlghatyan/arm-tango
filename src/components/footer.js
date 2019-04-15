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

const captureProfileLink = () => {
  window.captureOutboundLink('https://www.facebook.com/arthur.khlghatyan.1');
  return false;
};

const Footer = () => (
  <footer className="bg-black">
    <Container>
      <Row>
        <Col sm={12} md={4} lg={4} className="mt-4 mb-1">
          <h5 className="font-weight-bold text-uppercase mb-4">
            #ArmTangoFest2019
          </h5>
          <p>
            Maestros, tangueras, tangueros, and DJs from all over the world will join us for this inaugural Tango Festival in Armenia – the ancient land at the crossroads of East and West. 
          </p>
        </Col>
        <Col sm={12} md={4} lg={4} className="mt-4 mb-1">
          <h5 className="font-weight-bold text-uppercase mb-4">
            Contact
          </h5>
          <p>
            <FaEnvelope />
            &nbsp;
            tango.inarmenia@gmail.com
          </p>
          <p>
            <FaPhone />
            &nbsp;
            <FaViber />
            &nbsp;
            <FaWhatsapp />
            &nbsp;
            +374 95889933
          </p>
          <p>
            <FaFacebook />
            &nbsp;
            <a
              target="_blank"
              href="https://www.facebook.com/armtangofest">
              @armtangofest
            </a>
          </p>
        </Col>
        <Col sm={12} md={4} lg={4} className="mt-4 mb-1">
          <h5 className="font-weight-bold text-uppercase mb-4">
            Useful links
          </h5>
          <p>
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSe8pL_3YiNJZbFwPC1gtCggzjHjid14rbZnDXJRYbFzYsBi_w/viewform">
              Book now
            </a>
          </p>
          <p>
            <a
              target="_blank"
              href="https://www.facebook.com/events/279299639637976/">
              Join Event on Facebook
            </a>
          </p>
          <p>
            <a
              target="_blank"
              href="https://www.facebook.com/lavida.tango.yerevan">
              Tango School Facebook page
            </a>
          </p>
        </Col>
      </Row>
    </Container>
    <div className="footer-copyright text-center py-4">
      <div>© 2019 Copyright: ArmTangoFest2019</div>
      <div>
        Developed by
        &nbsp;
        <a
          onClick={captureProfileLink}
          target="_blank"
          href="https://www.facebook.com/arthur.khlghatyan.1">Arthur K.</a>
      </div>
    </div>
  </footer>
);

export default Footer;
