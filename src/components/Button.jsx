import React from "react";

function Button({ text, type = "primary", onClick }) {
  const base =
    "px-8 py-3 rounded-xl font-semibold transition duration-300 shadow-md cursor-pointer";

  const styles = {
    primary: `${base} bg-blue-600 text-white hover:bg-blue-700`,
    secondary: `${base} border border-blue-600 text-blue-600 hover:bg-blue-50`,
  };

  return (
    <button className={styles[type]} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
