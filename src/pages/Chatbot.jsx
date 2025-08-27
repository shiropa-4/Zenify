// Chatbot.jsx
import React, { useState } from "react";
import "../styles/Chatbot.css";

function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
    { sender: "user", text: "I need help with my mood." },
    {
      sender: "bot",
      text: "I'm sorry to hear you’re feeling down. Would you like to talk about it?",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="chatbot-container">
      <h2 className="chatbot-title">Chatbot</h2>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "user" ? "user" : "bot"}`}
          >
            {msg.sender === "bot" && (
              <div className="avatar">🤖</div>
            )}
            <div className="bubble">{msg.text}</div>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} className="send-btn"></button>
      </div>
    </div>
  );
}

export default Chatbot;
