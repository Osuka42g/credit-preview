import React, { useState, useEffect, } from 'react';
import { Container, Row, Col, Table, } from 'react-bootstrap';
import Slider from './Slider';

import CONST from '../constants';
import { format, createMonthlyNoInterest, } from '../logic/currency';
import { twoDecimals, toYears, } from '../logic/number';


const DataRow = props => {
  const { period, fee, left, soFar } = props;
  return (
    <tr>
      <td>{period}</td>
      <td>{format(fee)}</td>
      <td>{format(left)}</td>
      <td>{format(soFar)}</td>
    </tr>
  )
};

const DataTable = props => {
  const { rows } = props;
  const DataRows = rows.map(e => <DataRow
      period={e.period}
      fee={e.fee}
      left={e.left}
      soFar={e.soFar}
    />
  );

  return DataRows;
};

const Main = () => {
  const [credit, setCredit] = useState(CONST.CREDIT_DEFAULT);
  const [periods, setPeriods] = useState(CONST.PERIOD_DEFAULT);
  const [interest, setInterest] = useState(CONST.INTEREST_DEFAULT);

  const [monthly, setMonthly] = useState([]);


  useEffect(() => {
    setMonthly(createMonthlyNoInterest({ periods, credit, }));
  }, [credit, periods, interest,])

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
          {periods} months ({toYears(periods)} years)
        </Col>
        <Col xs={9}>
          <Slider
            step={CONST.PERIOD_STEP}
            min={CONST.PERIOD_MIN}
            max={CONST.PERIOD_MAX}
            value={periods}
            onChange={setPeriods}
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
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Period</th>
                <th>Fee</th>
                <th>Left</th>
                <th>So far</th>
              </tr>
            </thead>
            <tbody>
              <DataTable rows={monthly} />
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;