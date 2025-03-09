// DisplayText.js
import React, { useState } from 'react';
import Button from './Button';  // Import the Button component

const DisplayText = () => {
  const [displayText, setDisplayText] = useState('');
  const [showLetters, setShowLetters] = useState(false);

  const letters = ['E', 'K', 'S', 'H', 'I', 'K', 'A'];

  const handleClick = () => {
    setShowLetters(true);
    let index = -1;

    const interval = setInterval(() => {
      if (index < letters.length - 1) {
        index++;
        setDisplayText((prev) => prev + letters[index]);
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '18px' }}>{displayText}</h1>
      {!showLetters && <Button onClick={handleClick} />} {/* Use the Button component */}
    </div>
  );
};

export default DisplayText;
