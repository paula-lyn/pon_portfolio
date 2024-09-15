// Circle.tsx
import React from "react";
import "./style.css"; // Import CSS file

interface CircleProps {
  diameter: number;
  color: string;
  id?: string;
  className?: string;
}

const Circle: React.FC<CircleProps> = ({ diameter, color, id, className }) => {
  return (
    <div
      className={`circle ${className}`}
      id={id}
      style={{ width: diameter, height: diameter, backgroundColor: color }}
    ></div>
  );
};

export default Circle;
