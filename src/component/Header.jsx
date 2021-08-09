import React from 'react';
import companyLogo from '../pod_logo.png';
import { Container, Row, Col, Media, Button } from 'reactstrap';

function Header () {
    return (
    <Container fluid="true" className="headerbg">
      <Row>
        <Col sm="3" xs="6">
        <img src={companyLogo} className="logo" alt="POD Logo"/>
        </Col>
        <Col sm="9" xs="6" className="text-right"><Button outline color="danger">Logout</Button></Col>
      </Row>
    </Container>
    );
}

export default Header;