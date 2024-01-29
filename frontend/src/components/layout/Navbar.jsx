import { useSelector } from "react-redux";
import LogOut from "../LogOut";
import LogIn from "../LogIn";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const { isConnected } = useSelector((state) => state.user);
  return (
    <>
      <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        {isConnected ? <LogOut /> : <LogIn />}
      </nav>
    </>
  );
};

export default Navbar;
