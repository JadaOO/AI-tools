import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./webComponent/Footer";
import Chatbot from "./Lex/Chatbot";
import MainButtons from "./webComponent/MainButtons";
import Navbar from "./webComponent/Navbar";
import OCR from "./Microsoft/OCR";
import Services from "./Google/Service";
import Chatgpt from "./Chatgpt/Chatgpt";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <p>This project is to explore different AI tools.</p>
        <Navbar />
        <Routes>
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/ocr" element={<OCR />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ask_chatgpt" element={<Chatgpt />} />
          {/* <Route path="/data" element={<Data />} />
          <Route path="/" element={<Chatbot />} /> Default route */}
        </Routes>
      </header>
      {/* <Routes>
        <Route path="/" element={<MainButtons />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
      <MainButtons /> */}
      <Footer />
    </div>
  );
}

export default App;
