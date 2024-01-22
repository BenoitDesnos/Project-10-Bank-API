import { useSelector } from "react-redux";
import LogOut from "../LogOut";
import LogIn from "../LogIn";
const Navbar = () => {
  const { isConnected } = useSelector((state) => state.user);
  return (
    <>
      <nav className="main-nav">
        <a className="main-nav-logo" href="./index.html">
          <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        {isConnected ? <LogOut /> : <LogIn />}
      </nav>
    </>
  );
};

export default Navbar;
