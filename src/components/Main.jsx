import React, { useState, } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import Slider from 'react-input-slider';

import CONST from '../constants';
import { format } from '../logic/currency';

const Main = () => {
  const [credit, setCredit] = useState(CONST.CREDIT_DEFAULT);

  return (
    <Container>
      <Row>
        <Col>1 of 1</Col>
      </Row>
      <Row>
        <Col>
          {format(credit)}
        </Col>
        <Col xs={9}>
          <Slider
            axis="x"
            xstep={1000}
            xmin={CONST.CREDIT_MIN}
            xmax={CONST.CREDIT_MAX}
            x={credit}
            onChange={({ x }) => setCredit(x)}
            styles={{ track: { width: '100%' } } } />
        </Col>
      </Row>
      <Row>

      </Row>
    </Container>
  );
}

export default Main;