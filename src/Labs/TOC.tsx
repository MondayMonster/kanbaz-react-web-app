import { useLocation } from "react-router";

export default function TOC() {
  const { pathname } = useLocation();
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a id="wd-a" href="#/Labs" className="nav-link">
          Labs
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-a1"
          href="#/Labs/Lab1"
          className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}
        >
          Lab 1
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-a2"
          href="#/Labs/Lab2"
          className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}
        >
          Lab 2
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-a3"
          href="#/Labs/Lab3"
          className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}
        >
          Lab 3
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-a4"
          href="#/Labs/Lab4"
          className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}
        >
          Lab 4
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-a5"
          href="#/Labs/Lab5"
          className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}
        >
          Lab 5
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="#/Kanbas" className="nav-link">
          Kanbas
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-github"
          href="https://github.com/MondayMonster/kanbaz-react-web-app"
          target="_blank"
          className="nav-link"
        >
          Monday Monster GitHub (Siddhant Narode) React Web App
        </a>
      </li>
      <li className="nav-item">
        <a
          id="wd-github"
          href="https://github.com/MondayMonster/kambaz-node-server-app"
          target="_blank"
          className="nav-link"
        >
          Monday Monster GitHub (Siddhant Narode) Server
        </a>
              <li className="nav-item">
        <a
          id="wd-github"
          href="https://kambaz-node-server-app-mondaymonster.onrender.com"
          target="_blank"
          className="nav-link"
        >
          Monday Monster GitHub (Siddhant Narode) Root Server
        </a>
      </li>
      </li>
    </ul>
  );
}
