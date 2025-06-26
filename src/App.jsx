import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./Pages/Search";
import Results from "./Pages/Results";
import Landing from "./Pages/Landing";
import Navbar from "./Components/Navbar";


function App() {
  const [data, setData] = React.useState([]);

  const handleData = (formData) => {
    console.log("Data received in App component:", formData);
    setData(formData);
  }

  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/search" exact element={<Search onSearchSubmit={handleData} />} />
        <Route path="/results" exact element={<Results resultsData={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
