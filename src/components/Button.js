import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button className="enter-button" onClick={onClick}>
      Enter
    </button>
  );
};

export default Button;