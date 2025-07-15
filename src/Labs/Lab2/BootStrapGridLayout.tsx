import { Row, Col } from 'react-bootstrap';

export default function BootstrapGridSystem() {
  return (
    <div id="wd-bs-grid-system" className="p-2">
      <h2>Bootstrap</h2>
      <h3>Grid system</h3>

     <Row className="g-0">
  <Col xs={6} className="bg-danger text-white p-0 text-center">
    <div className="py-2">Left half</div>
  </Col>
  <Col xs={6} className="bg-primary text-white p-0 text-center">
    <div className="py-2">Right half</div>
  </Col>
</Row>

<Row className="g-0">
  <Col xs={4} className="bg-warning p-0 text-center">
    <div className="py-2">One thirds</div>
  </Col>
  <Col xs={8} className="bg-success text-white p-0 text-center">
    <div className="py-2">Two thirds</div>
  </Col>
</Row>

<Row className="g-0">
  <Col xs={2} className="bg-black text-white p-0 text-center">
    <div className="py-2 text-nowrap">Sidebar</div>
  </Col>
  <Col xs={8} className="bg-secondary text-white p-0 text-center">
    <div className="py-2 text-nowrap">Main content</div>
  </Col>
  <Col xs={2} className="bg-info text-white p-0 text-center">
    <div className="py-2 text-nowrap">Sidebar</div>
  </Col>
</Row>


    </div>
  );
}
