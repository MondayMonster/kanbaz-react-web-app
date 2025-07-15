import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function BootstrapTabsAndCardsDemo() {
  return (
    <div className="p-3">
      {/* Tabs Navigation */}
      <div id="wd-css-navigating-with-tabs" className="mb-4">
        <h2>Tabs</h2>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link href="https://www.youtube.com/watch?v=ITQQlAdco1g&list=PLFMGOXMVcioCkgAtQQQ1NlEJeP53SoGOl">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://www.youtube.com/watch?v=EBEHceWEqQw">Link 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://www.youtube.com/watch?v=O_jaEHzSSM0">Link 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#/Labs/Lab2/Disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      {/* Pills Navigation with React Router */}
      <div className="mb-4">
        <h2>Pills Navigation (with React Router)</h2>
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link to="/Labs/Lab1" as={Link}>
              Lab 1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/Labs/Lab2" as={Link} active>
              Lab 2
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/Kambaz" as={Link}>
              Kambaz
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://github.com/MondayMonster/kanbaz-react-web-app">My GitHub</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      {/* Card Example */}
      <div id="wd-css-navigating-with-cards">
        <h2>Cards</h2>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="../public/images/catmeme.jpg" />
          <Card.Body>
            <Card.Title>Stacking Starship</Card.Title>
            <Card.Text>
              Stacking the most powerful rocket in history. Mars or bust!
            </Card.Text>
            <Button variant="primary">Boldly Go</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}