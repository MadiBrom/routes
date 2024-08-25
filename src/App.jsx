import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Blue from "./components/blue";
import Red from "./components/red";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <div id="container">
        <div id="navbar">
          <Link to="/home">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
