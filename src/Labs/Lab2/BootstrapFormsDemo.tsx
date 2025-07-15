import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
export default function BootstrapFormsDemo() {
  return (
    <div className="p-3">
      {/* Email and Textarea */}
      <div id="wd-css-styling-forms">
        <h2>Forms</h2>
        <Form.Group className="mb-3" controlId="wd-email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="wd-textarea">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </div>

      {/* Dropdown */}
      <div id="wd-css-styling-dropdowns" className="mb-3">
        <h3>Dropdowns</h3>
        <Form.Select defaultValue="">
          <option value="">Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>

      {/* Switches */}
      <div id="wd-css-styling-switches" className="mb-3">
        <h3>Switches</h3>
        <Form.Check type="switch" id="wd-switch-1" label="Unchecked switch checkbox input" defaultChecked={false} />
        <Form.Check type="switch" id="wd-switch-2" label="Checked switch checkbox input" defaultChecked={true} />
        <Form.Check type="switch" id="wd-switch-3" label="Unchecked disabled switch checkbox input" disabled />
        <Form.Check type="switch" id="wd-switch-4" label="Checked disabled switch checkbox input" defaultChecked={true} disabled />
      </div>

      {/* Sliders */}
      <div id="wd-css-styling-range-and-sliders" className="mb-3">
        <h3>Range</h3>
        <Form.Range min="0" max="5" step="0.5" />
      </div>

      {/* Addons */}
      <div id="wd-css-styling-addons" className="mb-3">
        <h3>Addons</h3>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <InputGroup.Text>0.00</InputGroup.Text>
          <Form.Control />
        </InputGroup>
        <InputGroup>
          <Form.Control />
          <InputGroup.Text>$</InputGroup.Text>
          <InputGroup.Text>0.00</InputGroup.Text>
        </InputGroup>
      </div>

      {/* Responsive Forms 1 */}
      <div id="wd-css-responsive-forms-1" className="mb-3">
        <h3>Responsive forms</h3>
        <Form.Group as={Row} className="mb-3" controlId="email1">
          <Form.Label column sm={2}>Email</Form.Label>
          <Col sm={10}>
            <Form.Control type="email" value="email@example.com" readOnly />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="password1">
          <Form.Label column sm={2}>Password</Form.Label>
          <Col sm={10}>
            <Form.Control type="password" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="textarea2">
          <Form.Label column sm={2}>Bio</Form.Label>
          <Col sm={10}>
            <Form.Control as="textarea" style={{ height: "100px" }} />
          </Col>
        </Form.Group>
      </div>

      {/* Responsive Forms 2 */}
      <div id="wd-css-responsive-forms-2">
        <h3>Responsive forms</h3>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>Email</Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>Password</Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>Radios</Form.Label>
              <Col sm={10}>
                <Form.Check type="radio" label="first radio" name="formHorizontalRadios" defaultChecked />
                <Form.Check type="radio" label="second radio" name="formHorizontalRadios" />
                <Form.Check type="radio" label="third radio" name="formHorizontalRadios" />
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Button type="submit">Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}