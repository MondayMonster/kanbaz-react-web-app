import { Button, InputGroup, FormControl, ListGroup } from "react-bootstrap";
import { FaSearch, FaPlus, FaRegFolderOpen } from "react-icons/fa";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const assignments = [
  {
    title: "A1 - HTML",
    due: "Due Sep 10, 2025 at 11:59pm",
    points: "100 pts",
    icon: <BsFillFileEarmarkTextFill className="me-2 text-secondary fs-4" />,
  },
  {
    title: "A2 - CSS",
    due: "Due Sep 17, 2025 at 11:59pm",
    points: "100 pts",
    icon: <BsFillFileEarmarkTextFill className="me-2 text-secondary fs-4" />,
  },
  {
    title: "A3 - JavaScript",
    due: "Due Sep 24, 2025 at 11:59pm",
    points: "100 pts",
    icon: <BsFillFileEarmarkTextFill className="me-2 text-secondary fs-4" />,
  },
];

export default function Assignments() {
  return (
    <div className="p-4">
      {/* Top controls */}
      <div className="d-flex align-items-center mb-4">
        {/* Search field */}
        <InputGroup className="w-50">
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
          <FormControl placeholder="Search for Assignment" />
        </InputGroup>
        {/* Right buttons */}
        <div className="ms-auto d-flex">
          <Button variant="secondary" size="sm" className="me-2">
            <FaRegFolderOpen className="me-2" />
            Group
          </Button>
          <Button variant="danger" size="sm">
            <FaPlus className="me-2" />
            Assignment
          </Button>
        </div>
      </div>
      {/* Assignment list */}
      <ListGroup className="rounded-0">
        {assignments.map((a, idx) => (
          <ListGroup.Item
            key={idx}
            className="d-flex align-items-center mb-3 p-3"
            style={{ borderLeft: "4px solid green" }}
          >
            {a.icon}
            <div>
              <div className="fw-bold fs-5">
                <Link to={`/Kambaz/Courses/1/Assignments/1/Edit`}>{a.title}</Link>
              </div>
              <div className="text-muted small">
                {a.due} &nbsp;|&nbsp; {a.points}
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
