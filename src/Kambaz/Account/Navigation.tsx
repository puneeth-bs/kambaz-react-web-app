import { NavLink } from "react-router-dom";
import "../styles.css"; 

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <NavLink 
        to="/Kambaz/Account/Signin"
        id="wd-account-signin-link"
        className="list-group-item border border-0 text-danger"
      >
        Signin
      </NavLink>
      <NavLink 
        to="/Kambaz/Account/Signup"
        id="wd-account-signup-link"
        className="list-group-item border border-0 text-danger"
      >
        Signup
      </NavLink>
      <NavLink 
        to="/Kambaz/Account/Profile"
        id="wd-account-profile-link"
        className="list-group-item border border-0 text-danger"
      >
        Profile
      </NavLink>
    </div>
  );
}
