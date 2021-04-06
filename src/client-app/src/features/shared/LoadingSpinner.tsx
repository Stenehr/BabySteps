import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';

export default function loadingSpinner() {
  return (
    <Row>
      <Col md={{ span: 4, offset: 4 }}>
        <Spinner animation="border" />
      </Col>
    </Row>
  );
}
