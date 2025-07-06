import { Link } from "react-router-dom";

const courses = [
  { id: 1, title: "CS4550 - Web Dev", code: "CS4550", semester: "Fall 2025" },
  { id: 2, title: "CS5610 - Web Dev Tools", code: "CS5610", semester: "Fall 2025" },
  { id: 3, title: "CS5800 - Algorithms", code: "CS5800", semester: "Spring 2025" },
];

export default function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      <h2>Published Courses ({courses.length})</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {courses.map((course) => (
          <div key={course.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
            <h3>{course.title}</h3>
            <p>{course.code} - {course.semester}</p>
                <Link to={`/Kambaz/Courses/${course.id}/Home`}>Go to Course</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
