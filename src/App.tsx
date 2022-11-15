import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Routers/About";
import Admin from "./Routers/Admin";
import Branches from "./Routers/Branches";
import Contact from "./Routers/Contact";
import Home from "./Routers/Home";
import Layout from "./Routers/Layout";
import Login from "./Routers/Login";
import Register from "./Routers/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="branches" element={<Branches />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="admin" element={<Admin />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
