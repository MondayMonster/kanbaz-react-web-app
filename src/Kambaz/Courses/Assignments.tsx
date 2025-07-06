import { Link } from 'react-router-dom';

export default function Assignments() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search for Assignments"
          style={{ padding: '6px', marginRight: '10px' }}
        />
        <button style={{ marginRight: '10px' }}>+ Group</button>
        <button>+ Assignment</button>
      </div>

      <h2 style={{ display: 'inline-block', marginRight: '10px' }}>
        ASSIGNMENTS 40% of Total
      </h2>
      <button>+</button>
      <ul>
        <li>
          <Link to="/Labs/Lab1">A1 - ENV + HTML</Link><br />
          <span style={{ fontSize: '0.9em' }}>
            Multiple Modules | <b>Not available until</b> May 6 at 12:00am |
            <b> Due</b> May 13 at 11:59pm | 100 pts
          </span>
        </li>
        <li>
          <Link to="/Labs/Lab1">A2 - CSS + BOOTSTRAP</Link><br />
          <span style={{ fontSize: '0.9em' }}>
            Multiple Modules | <b>Not available until</b> May 13 at 12:00am |
            <b> Due</b> May 20 at 11:59pm | 100 pts
          </span>
        </li>
        <li>
          <Link to="/Labs/Lab1">A3 - JAVASCRIPT + REACT</Link><br />
          <span style={{ fontSize: '0.9em' }}>
            Multiple Modules | <b>Not available until</b> May 20 at 12:00am |
            <b> Due</b> May 27 at 11:59pm | 100 pts
          </span>
        </li>
      </ul>

      <h2>QUIZZES</h2>
      <ul>
        <li>
          <Link to="/Labs/Lab1">Q1 - HTML Quiz</Link><br />
          <span style={{ fontSize: '0.9em' }}>
            <b>Due</b> May 15 at 11:59pm | 20 pts
          </span>
        </li>
      </ul>

      <h2>EXAMS</h2>
      <ul>
        <li>
          <Link to="/Labs/Lab1">Midterm Exam</Link><br />
          <span style={{ fontSize: '0.9em' }}>
            <b>Due</b> June 1 at 11:59pm | 150 pts
          </span>
        </li>
      </ul>

      <h2>PROJECT</h2>
      <ul>
        <li>
          <Link to="/Labs/Lab1">Final Project Submission</Link><br />
          <span style={{ fontSize: '0.9em' }}>
            <b>Due</b> June 10 at 11:59pm | 200 pts
          </span>
        </li>
      </ul>
    </div>
  );
}
