import React from "react";
import { useState } from "react";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import "./carousel.css";

export const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const getClassName = (index) => {
    if (index === currentIndex) return "slide active";
    if (index === (currentIndex + 1) % items.length) return "slide next";
    if (index === (currentIndex - 1 + items.length) % items.length)
      return "slide prev";
    return "slide hidden";
  };

  return (
    <div className="carausel-text-box">
      <h2 className="carausel-title">All types of your favorite food!</h2>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {items.map((item, index) => (
            <div className={`slide ${getClassName(index)}`} key={index}>
              <img className="slide-image" src={item.image} alt={item.name} />
            </div>
          ))}
        </div>
        <div className="carousel-controls">
          <LeftCircleOutlined className="control-btn" onClick={prevSlide} />
          <div className="carousel-indicators">
            {items.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
          <RightCircleOutlined className="control-btn" onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};
