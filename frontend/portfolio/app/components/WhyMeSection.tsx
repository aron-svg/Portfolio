"use client";

import React from "react";

export default function WhyMeSection() {
  return (
    <section className="whyme-section">
      <div className="whyme-header">
        <p className="whyme-eyebrow">The Question</p>
        <h2 className="whyme-title">Why Me?</h2>
      </div>

      <div className="whyme-chat">
        <div className="chat-messages">
          <div className="chat-message message-question">
            <div className="message-bubble">
              <p className="message-text">Why should I hire you?</p>
            </div>
          </div>

          <div className="chat-message message-answer">
            <div className="message-bubble">
              <p className="message-text">
                I build fast, I build clean, and I don't waste time. You'll get production-ready code, 
                pixel-perfect UI, and systems that scale. I care about details—animations, accessibility, 
                performance—because good work speaks louder than promises. Hire me if you want results, 
                not excuses.
              </p>
            </div>
          </div>
        </div>

        <div className="chat-input-wrapper">
          <input
            type="text"
            placeholder="Ask me anything..."
            className="chat-input"
          />
          <button className="chat-send-btn" type="button">
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
    </section>
  );
}
