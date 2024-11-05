import { Link, useLocation } from "react-router-dom";
import "../style.css";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="wd list-group
    fs-5 rounded-0">
      {links.map((link) => (
        <Link key={link} to={`/Kanbas/Account/${link}`}
          className={`list-group-item border border-0
          ${pathname.includes(link) ? "active text-black" : "text-danger border-0"}`}>
          {link}
        </Link>
      ))}
    </div>
);}
