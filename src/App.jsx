import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./Pages/Search";
import Results from "./Pages/Results";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/search" exact Component={Search} />
        <Route path="/results" exact Component={Results} />
      </Routes>
    </Router>
  );
}

export default App;
