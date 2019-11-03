import React, { useState, } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import Slider from './Slider';

import CONST from '../constants';
import { format } from '../logic/currency';
import { twoDecimals } from '../logic/number';

const Main = () => {
  const [credit, setCredit] = useState(CONST.CREDIT_DEFAULT);
  const [period, setPeriod] = useState(CONST.PERIOD_DEFAULT);
  const [interest, setInterest] = useState(CONST.INTEREST_DEFAULT);

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
            step={CONST.CREDIT_STEP}
            min={CONST.CREDIT_MIN}
            max={CONST.CREDIT_MAX}
            value={credit}
            onChange={setCredit}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          {period} months
        </Col>
        <Col xs={9}>
          <Slider
            step={CONST.PERIOD_STEP}
            min={CONST.PERIOD_MIN}
            max={CONST.PERIOD_MAX}
            value={period}
            onChange={setPeriod}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          {twoDecimals(interest)}%
        </Col>
        <Col xs={9}>
          <Slider
            step={CONST.INTEREST_STEP}
            min={CONST.INTEREST_MIN}
            max={CONST.INTEREST_MAX}
            value={interest}
            onChange={setInterest}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;