import { deleteToken } from "../utils/tokenStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setIsConnected } from "../redux/slices/userSlice";
/* import {  useSelector } from "react-redux"; */
function LogOut() {
  /* const { userProfile } = useSelector(state => state.user); */
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    deleteToken();
    dispatch(setIsConnected(false));
    navigate("/");
  };
  return (
    <div className="signout--container">
      <a className="main-nav-item" href="/profile">
        <FontAwesomeIcon icon="user-circle" /> {"Benoit"}
      </a>
      <div className="main-nav-item" onClick={handleLogOut}>
        <FontAwesomeIcon icon="sign-out" /> Sign Out
      </div>
    </div>
  );
}

export default LogOut;
