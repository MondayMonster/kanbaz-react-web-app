// src/Kambaz/Navigation.tsx (or wherever your nav is)
import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KambazNavigation() {
  const location = useLocation();

  return (
    <ListGroup
      id="wd-kambaz-navigation"
      style={{ width: 120 }}
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      {/* Northeastern logo */}
      <ListGroup.Item
        id="wd-neu-link"
        target="_blank"
        action
        href="https://www.northeastern.edu/"
        className="bg-black border-0 text-center"
      >
        <img src="/images/neu-logo.webp" width="75px" alt="Northeastern" />
      </ListGroup.Item>
      <br />

      {/* Account */}
      <ListGroup.Item
        to="/kambaz/account"
        as={Link}
        active={location.pathname.startsWith("/kambaz/account")}
        className={`text-center border-0 bg-black ${location.pathname.startsWith("/kambaz/account") ? "bg-white text-danger" : "text-white"}`}
        style={{ fontSize: "1.3rem" }}
      >
        <FaRegCircleUser className={`fs-1 ${location.pathname.startsWith("/kambaz/account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </ListGroup.Item>
      <br />

      {/* Dashboard */}
      <ListGroup.Item
        to="/kambaz/dashboard"
        as={Link}
        active={location.pathname.startsWith("/kambaz/dashboard")}
        className={`text-center border-0 ${location.pathname.startsWith("/kambaz/dashboard") ? "bg-white text-danger" : "bg-black text-white"}`}
        style={{ fontSize: "1.3rem" }}
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </ListGroup.Item>
      <br />

      {/* Courses */}
      <ListGroup.Item
        to="/kambaz/courses"
        as={Link}
        active={location.pathname.startsWith("/kambaz/courses")}
        className={`text-center border-0 ${location.pathname.startsWith("/kambaz/courses") ? "bg-white text-danger" : "bg-black text-white"}`}
        style={{ fontSize: "1.3rem" }}
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </ListGroup.Item>
      <br />

      {/* Calendar */}
      <ListGroup.Item
        to="/kambaz/calendar"
        as={Link}
        active={location.pathname.startsWith("/kambaz/calendar")}
        className={`text-center border-0 ${location.pathname.startsWith("/kambaz/calendar") ? "bg-white text-danger" : "bg-black text-white"}`}
        style={{ fontSize: "1.3rem" }}
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </ListGroup.Item>
      <br />

      {/* Inbox */}
      <ListGroup.Item
        to="/kambaz/inbox"
        as={Link}
        active={location.pathname.startsWith("/kambaz/inbox")}
        className={`text-center border-0 ${location.pathname.startsWith("/kambaz/inbox") ? "bg-white text-danger" : "bg-black text-white"}`}
        style={{ fontSize: "1.3rem" }}
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </ListGroup.Item>
      <br />

      {/* Labs */}
      <ListGroup.Item
        to="/labs/lab1"
        as={Link}
        active={location.pathname.startsWith("/labs")}
        className={`text-center border-0 ${location.pathname.startsWith("/labs") ? "bg-white text-danger" : "bg-black text-white"}`}
        style={{ fontSize: "1.3rem" }}
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Labs
      </ListGroup.Item>
    </ListGroup>
  );
}
