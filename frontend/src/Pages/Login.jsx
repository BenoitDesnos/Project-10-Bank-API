/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { fetchUserLogin } from "../redux/slices/userSlice";
import { useNavigate } from "react-router";
import { useEffect } from "react";
const Login = () => {
  const dispatchEvent = useDispatch();
  const navigate = useNavigate();
  const { isConnecting, isConnected } = useSelector((state) => state.user);
  useEffect(() => {
    if (isConnected) {
      navigate("/profile");
    }
  }, [isConnected]);
  console.log(isConnecting, isConnected);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("remember-me").checked;
    const user = {
      email: username,
      password,
      rememberMe,
    };
    dispatchEvent(fetchUserLogin(user));
  };
  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
            {isConnecting && <p>Connexion en cours...</p>}
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;
