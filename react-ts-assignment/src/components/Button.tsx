import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  size: "small" | "medium" | "large";
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  children,
  onClick,
}) => {
  const styles = {
    backgroundColor: variant === "primary" ? "#2563eb" : "#6b7280",
    color: "white",
    padding:
      size === "small"
        ? "8px 12px"
        : size === "medium"
        ? "10px 18px"
        : "14px 24px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "5px",
  };

  return (
    <button style={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;