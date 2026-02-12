"use client";

import React, { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  type: "question" | "answer";
  text: string;
}

export default function WhyMeSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "answer",
      text: "Ask me any question you want about myself!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Disabled auto-scroll on message changes
    // scrollToBottom();
  }, [messages]);

  const handleSendQuestion = async () => {
    if (!input.trim()) return;

    const userQuestion = input.trim();
    setInput("");

    // Add user question to chat
    const questionId = `q-${Date.now()}`;
    setMessages((prev) => [
      ...prev,
      {
        id: questionId,
        type: "question",
        text: userQuestion,
      },
    ]);

    setLoading(true);

    try {
      const response = await fetch("/api/whyme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: userQuestion }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();

      // Add AI answer to chat
      const answerId = `a-${Date.now()}`;
      setMessages((prev) => [
        ...prev,
        {
          id: answerId,
          type: "answer",
          text: data.answer,
        },
      ]);
    } catch (error) {
      console.error("Error:", error);
      // Add error message
      const errorId = `e-${Date.now()}`;
      setMessages((prev) => [
        ...prev,
        {
          id: errorId,
          type: "answer",
          text: "Sorry, I couldn't generate a response. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendQuestion();
    }
  };

  return (
    <section className="whyme-section">
      <div className="whyme-header">
        <p className="whyme-eyebrow">The Question</p>
        <h2 className="whyme-title">Why Me?</h2>
      </div>

      <div className="whyme-chat-container">
        <div className="whyme-chat">
          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-message message-${message.type}`}
              >
                {message.type === "answer" && (
                  <img
                    src="/chatbox.jpg"
                    alt="Aron Segovia"
                    className="message-avatar"
                  />
                )}
                <div className="message-bubble">
                  <p className="message-text">{message.text}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="chat-message message-answer">
                <img
                  src="/chatbox.jpg"
                  alt="Aron Segovia"
                  className="message-avatar"
                />
                <div className="message-bubble">
                  <p className="message-text loading">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-wrapper">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={loading}
            />
            <button
              className="chat-send-btn"
              type="button"
              onClick={handleSendQuestion}
              disabled={loading || !input.trim()}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 10L17.5 3.33334L10.8333 18.3333L9.16667 11.6667L2.5 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
