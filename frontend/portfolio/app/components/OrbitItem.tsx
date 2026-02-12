"use client";

import React, { useState, useRef, useEffect } from "react";

type OrbitItemProps = {
  label: string;
  tooltip: string;
  className: string;
};

type PopupPosition = {
  top: number;
  left: number;
};

export default function OrbitItem({ label, tooltip, className }: OrbitItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [popupPos, setPopupPos] = useState<PopupPosition>({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isHovered && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPopupPos({
        top: rect.bottom + 10, // Position below the circle
        left: rect.left + rect.width / 2, // Center horizontally
      });
    }
  }, [isHovered]);

  return (
    <div className={`orbit-item ${className}`}>
      <button
        ref={buttonRef}
        className="orbit-sphere"
        type="button"
        aria-label={label}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="orbit-core" />
      </button>

      {isHovered && (
        <div
          className="orbit-detail-popup"
          style={{
            top: `${popupPos.top}px`,
            left: `${popupPos.left}px`,
          }}
        >
          <img src="/ftc.jpeg" alt="FTC Robotics" className="orbit-detail-image" />
          <div className="orbit-detail-content">
            <p className="orbit-detail-text">
              I served as Software Chief Engineer for the CIV robotics team in the
              FIRST Tech Challenge (FTC), leading the development of our robot's
              control systems in Java. Our team won the national Control Award for
              programming excellence, strengthening my skills in leadership,
              problem-solving, and advanced robotics programming.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
