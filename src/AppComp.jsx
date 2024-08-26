import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import Blue from "./components/blue.jsx";
// import Red from "./components/red.jsx";
// import Home from "./components/home.jsx";
import Test from "./components/test";

function App() {
  return (
    <Router>
      <div id="container">
        <div id="navbar">
          {/* <Link to="/">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link> */}
          <Link to="/test">Test</Link>
        </div>
        <div id="main-section">
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} /> */}
            <Route path="*" element={<h1>404 Not Found</h1>} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
console.log("App component loaded");
export default App;
