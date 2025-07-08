import { Link } from "react-router-dom";

type Props = {
  courseId: string;
};

export default function Navigation({ courseId }: Props) {
  return (
    <nav>
      <Link to={`/Kambaz/Courses/${courseId}/Home`}>Home</Link><br />
      <Link to={`/Kambaz/Courses/${courseId}/Modules`}>Modules</Link><br />
      <Link to={`/Kambaz/Courses/${courseId}/Piazza`}>Piazza</Link><br />
      <Link to={`/Kambaz/Courses/${courseId}/Zoom`}>Zoom</Link><br />
      <Link to={`/Kambaz/Courses/${courseId}/Quizzes`}>Quizzes</Link><br />
      <Link to={`/Kambaz/Courses/${courseId}/Assignments`}>Assignments</Link><br />
      <Link to={`/Kambaz/Courses/${courseId}/Grades`}>Grades</Link><br />
    </nav>
  );
}
