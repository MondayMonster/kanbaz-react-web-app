import React from "react";
import { Row, Col } from "react-bootstrap";

export default function ResponsiveGridDemo() {
  return (
    <div id="wd-bs-responsive-demo" className="p-3">
      {/* Breakpoint Label Box */}
      <div className="position-fixed top-0 start-0 bg-black text-white px-2 py-1 z-3">
        <span className="d-none d-sm-inline d-md-none">SM</span>
        <span className="d-none d-md-inline d-lg-none">MD</span>
        <span className="d-none d-lg-inline d-xl-none">LG</span>
        <span className="d-none d-xl-inline">XL+</span>
      </div>

      {/* Responsive grid system (A–D) */}
      <div id="wd-bs-responsive-grids" className="mb-4">
        <h2>Responsive grid system</h2>
        <Row>
          <Col xs={12} md={6} xl={3} className="bg-warning">
            <h3>Column A</h3>
          </Col>
          <Col xs={12} md={6} xl={3} className="bg-primary text-white">
            <h3>Column B</h3>
          </Col>
          <Col xs={12} md={6} xl={3} className="bg-danger text-white">
            <h3>Column C</h3>
          </Col>
          <Col xs={12} md={6} xl={3} className="bg-success text-white">
            <h3>Column D</h3>
          </Col>
        </Row>
      </div>

      {/* Dramatic Responsive grid system (1–12) */}
      <div id="wd-bs-responsive-dramatic">
        <h2>Responsive grid system</h2>
        <Row>
          <Col xs={12} className="bg-warning">
            <h4>1</h4>
          </Col>
          <Col xs={12} className="bg-primary text-white">
            <h4>2</h4>
          </Col>
          <Col xs={12} className="bg-danger text-white">
            <h4>3</h4>
          </Col>
          <Col xs={12} className="bg-success text-white">
            <h4>4</h4>
          </Col>
          <Col xs={12} className="bg-warning">
            <h4>5</h4>
          </Col>
          <Col xs={12} className="bg-primary text-white">
            <h4>6</h4>
          </Col>
          <Col xs={12} className="bg-danger text-white">
            <h4>7</h4>
          </Col>
          <Col xs={12} className="bg-success text-white">
            <h4>8</h4>
          </Col>
          <Col xs={12} className="bg-warning">
            <h4>9</h4>
          </Col>
          <Col xs={12} className="bg-primary text-white">
            <h4>10</h4>
          </Col>
          <Col xs={12} className="bg-danger text-white">
            <h4>11</h4>
          </Col>
          <Col xs={12} className="bg-success text-white">
            <h4>12</h4>
          </Col>
        </Row>
      </div>
    </div>
  );
}