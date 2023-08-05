import "../src/styles/styles.css";
import Home from "./Pages/Home";
import Notfound from "./Pages/Notfound";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
