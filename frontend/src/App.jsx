import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Layout from "./components/layout/Layout";
import Login from "./Pages/Login";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
