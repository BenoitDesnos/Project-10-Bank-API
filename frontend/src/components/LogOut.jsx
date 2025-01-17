import { deleteToken } from "../utils/tokenStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setIsConnected } from "../redux/slices/userSlice";
import { NavLink } from "react-router-dom";
function LogOut() {
  const { userProfile } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    deleteToken();
    dispatch(setIsConnected(false));
    navigate("/");
  };
  return (
    <div className="signout--container">
      <NavLink className="main-nav-item" to="/profile">
        <FontAwesomeIcon icon="user-circle" /> {userProfile?.firstName}
      </NavLink>
      <div className="main-nav-item" onClick={handleLogOut}>
        <FontAwesomeIcon icon="sign-out" /> Sign Out
      </div>
    </div>
  );
}

export default LogOut;
