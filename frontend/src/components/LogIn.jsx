import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function LogIn() {
  return (
    <div>
      <div>
        <NavLink className="main-nav-item" to="/login">
          <FontAwesomeIcon icon="user-circle" /> Sign In
        </NavLink>
      </div>
    </div>
  );
}

export default LogIn;
