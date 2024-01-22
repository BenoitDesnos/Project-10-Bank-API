import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Layout from "./components/layout/Layout";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
