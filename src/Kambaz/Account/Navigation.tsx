import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/kambaz/account/signin", label: "Sign In", id: "wd-account-signin-link" },
  { to: "/kambaz/account/signup", label: "Sign Up", id: "wd-account-signup-link" },
  { to: "/kambaz/account/profile", label: "Profile", id: "wd-account-profile-link" },
];

export default function AccountNavigation() {
  const location = useLocation();
  return (
    <div className="list-group wd rounded-0 fs-5" style={{ width: 180 }}>
      {links.map(link => (
        <Link
          key={link.label}
          to={link.to}
          id={link.id}
          className={`list-group-item border-0 ${location.pathname === link.to ? "active" : "text-danger"}`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}