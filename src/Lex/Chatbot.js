import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, user: "user" }]);
      setInput("");
      // Simulate a bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "This is a bot response", user: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <div>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
