import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/kambaz/courses/1234/home", label: "Home", id: "wd-course-home-link" },
  { to: "/kambaz/courses/1234/modules", label: "Modules", id: "wd-course-modules-link" },
  { to: "/kambaz/courses/1234/piazza", label: "Piazza", id: "wd-course-piazza-link" },
  { to: "/kambaz/courses/1234/zoom", label: "Zoom", id: "wd-course-zoom-link" },
  { to: "/kambaz/courses/1234/assignments", label: "Assignments", id: "wd-course-assignments-link" },
  { to: "/kambaz/courses/1234/quizzes", label: "Quizzes", id: "wd-course-quizzes-link" },
  { to: "/kambaz/courses/1234/grades", label: "Grades", id: "wd-course-grades-link" },
  { to: "/kambaz/courses/1234/people", label: "People", id: "wd-course-people-link" }, // <-- Add this line

];

export default function CourseNavigation() {
  const location = useLocation();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map(link => {
        const isActive = location.pathname.toLowerCase().includes(link.label.toLowerCase());
        // Home should be active if on /home or exactly /courses/1234
        const homeActive = link.label === "Home" &&
          (location.pathname.endsWith("/home") || /\/courses\/\d+\/?$/.test(location.pathname));
        return (
          <Link
            key={link.label}
            to={link.to}
            id={link.id}
            className={`list-group-item border-0 ${homeActive || isActive ? "active" : "text-danger"}`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
