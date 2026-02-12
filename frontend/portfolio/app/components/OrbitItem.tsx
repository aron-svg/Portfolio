"use client";

import React, { useState } from "react";

type OrbitItemProps = {
  label: string;
  tooltip: string;
  className: string;
  image?: string;
  video?: string;
  description?: string;
  imagePosition?: string;
};

export default function OrbitItem({ 
  label, 
  tooltip, 
  className,
  image = "/ftc.jpeg",
  video,
  description = "I served as Software Chief Engineer for the CIV robotics team in the FIRST Tech Challenge (FTC), leading the development of our robot's control systems in Java. Our team won the national Control Award for programming excellence, strengthening my skills in leadership, problem-solving, and advanced robotics programming.",
  imagePosition = "center"
}: OrbitItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`orbit-item ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className="orbit-sphere"
        type="button"
        aria-label={label}
      >
        <span className="orbit-core" />
      </button>

      {isHovered && (
        <div className="orbit-detail-popup">
          {video ? (
            <video 
              src={video}
              className="orbit-detail-image"
              style={{ objectPosition: imagePosition }}
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img 
              src={image} 
              alt={label} 
              className="orbit-detail-image"
              style={{ objectPosition: imagePosition }}
            />
          )}
          <div className="orbit-detail-content">
            <p className="orbit-detail-text">
              {description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
