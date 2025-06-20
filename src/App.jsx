import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./Pages/Search";
import Results from "./Pages/Results";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" exact Component={Search} />
          <Route path="/results" exact Component={Results} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
