import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./webComponent/Footer";
import Chatbot from "./Lex/Chatbot";
import MainButtons from "./webComponent/MainButtons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <p>This project is to explore different AI tools.</p>
        <Router>
          <Routes>
            <Route path="/" element={<MainButtons />} />
            <Route path="/chatbot" element={<Chatbot />} />
            {/* Add more routes here */}
          </Routes>
        </Router>
      </header>
      <Routes>
        <Route path="/" element={<MainButtons />} />
        <Route path="/chatbot" element={<Chatbot />} />
        {/* Add more routes here */}
      </Routes>
      <MainButtons />
      <Footer />
    </div>
  );
}

export default App;
