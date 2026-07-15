import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "8px",
        marginTop: "20px",
      }}
    >
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Card;