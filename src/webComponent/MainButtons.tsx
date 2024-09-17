import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chatbot from "../Lex/Chatbot";

const MainButtons: React.FC = () => {
  return (
    <div>
      <Link to="/chatbot">
        <button>Chatbot</button>
      </Link>
      <Link to="/route2">
        <button>Go to Route 2</button>
      </Link>
      <Link to="/route3">
        <button>Go to Route 3</button>
      </Link>
      <Link to="/route4">
        <button>Go to Route 4</button>
      </Link>
      <Link to="/route5">
        <button>Go to Route 5</button>
      </Link>
    </div>
  );
};

export default MainButtons;
