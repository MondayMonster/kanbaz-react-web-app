// src/Kambaz/Courses/Home.tsx
import CourseStatus from "./Status";
import { useParams } from "react-router-dom";

export default function Home() {
  const { courseId } = useParams();

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
      {/* Left Side - Main Content */}
      <div style={{ width: "70%" }}>
        <h2>Course {courseId}</h2>

        <div style={{ marginBottom: "10px" }}>
          <button>Collapse All</button>
          <button>View Progress</button>
          <select defaultValue="Publish All">
            <option>Publish All</option>
          </select>
          <button>+ Module</button>
        </div>

        <ul>
          <li>
            Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
            <ul>
              <li>LEARNING OBJECTIVES
                <ul>
                  <li>Introduction to the course</li>
                  <li>Learn what is Web Development</li>
                </ul>
              </li>
              <li>READING
                <ul>
                  <li>Full Stack Developer - Chapter 1 - Introduction</li>
                  <li>Full Stack Developer - Chapter 2 - Creating User Interfaces</li>
                </ul>
              </li>
              <li>SLIDES
                <ul>
                  <li>Introduction to Web Development</li>
                  <li>Creating an HTTP server with Node.js</li>
                  <li>Creating a React Application</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Week 1, Lecture 2 - Formatting User Interfaces with HTML
          </li>
        </ul>
      </div>

      {/* Right Side - Course Status Panel */}
      <div style={{ width: "25%" }}>
        <CourseStatus />
      </div>
    </div>
  );
}
