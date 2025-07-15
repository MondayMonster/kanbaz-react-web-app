// src/Kambaz/Courses/AssignmentEditor.tsx
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
  useParams();

  const [title, setTitle] = useState("A1 - ENV + HTML");
  const [description, setDescription] = useState("Build a page using HTML5 tags.");
  const [points, setPoints] = useState(100);
  const [group, setGroup] = useState("Assignments");
  const [gradingType, setGradingType] = useState("Percentage");
  const [submissionType, setSubmissionType] = useState("Online");
  const [entryOptions, setEntryOptions] = useState<string[]>(["Text Entry", "Website URL"]);
  const [assignTo, setAssignTo] = useState("Everyone");
  const [dueDate, setDueDate] = useState("2025-05-13");
  const [availableFrom, setAvailableFrom] = useState("2025-05-06");
  const [availableUntil, setAvailableUntil] = useState("2025-05-20");

  const toggleOption = (option: string) => {
    setEntryOptions(prev =>
      prev.includes(option)
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="p-4">
      {/* Breadcrumb / Course Name */}
      <h4 className="mb-4">CS1234 React JS &gt; Assignments &gt; Edit Assignment</h4>
      <Form>
        {/* Assignment Name */}
        <Form.Group className="mb-3" controlId="assignmentName">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" placeholder="Assignment Name" value={title} onChange={e => setTitle(e.target.value)} />
        </Form.Group>
        {/* Description */}
        <Form.Group className="mb-3" controlId="assignmentDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Assignment Description" value={description} onChange={e => setDescription(e.target.value)} />
        </Form.Group>
        <Row className="mb-3">
          <Col md={3}>
            <Form.Group controlId="assignmentPoints">
              <Form.Label>Points</Form.Label>
              <Form.Control type="number" placeholder="100" value={points} onChange={e => setPoints(Number(e.target.value))} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="assignmentGroup">
              <Form.Label>Assignment Group</Form.Label>
              <Form.Select value={group} onChange={e => setGroup(e.target.value)}>
                <option>Assignments</option>
                <option>Quizzes</option>
                <option>Exams</option>
                <option>Project</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="displayGradeAs">
              <Form.Label>Display Grade as</Form.Label>
              <Form.Select value={gradingType} onChange={e => setGradingType(e.target.value)}>
                <option>Percentage</option>
                <option>Points</option>
                <option>Complete/Incomplete</option>
                <option>Letter Grade</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="submissionType">
              <Form.Label>Submission Type</Form.Label>
              <Form.Select value={submissionType} onChange={e => setSubmissionType(e.target.value)}>
                <option>Online</option>
                <option>On Paper</option>
                <option>No Submission</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        {/* Assign Section */}
        <Row className="mb-3">
          <Col md={3}>
            <Form.Group controlId="assignTo">
              <Form.Label>Assign</Form.Label>
              <Form.Control type="text" placeholder="Everyone" value={assignTo} onChange={e => setAssignTo(e.target.value)} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="dueDate">
              <Form.Label>Due</Form.Label>
              <Form.Control type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="availableFrom">
              <Form.Label>Available from</Form.Label>
              <Form.Control type="date" value={availableFrom} onChange={e => setAvailableFrom(e.target.value)} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="until">
              <Form.Label>Until</Form.Label>
              <Form.Control type="date" value={availableUntil} onChange={e => setAvailableUntil(e.target.value)} />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" className="mt-3">Save</Button>
      </Form>
    </div>
  );
}
