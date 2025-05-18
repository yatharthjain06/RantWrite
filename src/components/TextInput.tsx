import React, { useState, useEffect } from 'react';

const TextInput = () => {
  const [text, setText] = useState('');
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setText(newText);

    // Split the text into words and filter out empty strings
    const words = newText.trim().split(/\s+/).filter(word => word.length > 0);
    
    // Keep only the last three words
    const lastThreeWords = words.slice(-3);
    
    setDisplayedWords(lastThreeWords);
    setWordCount(words.length);
  };

  return (
    <div className="text-input-container">
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Start typing..."
        className="text-input"
      />
      <div className="displayed-text">
        {displayedWords.join(' ')}
      </div>
      <div className="word-count">
        Words: {wordCount}
      </div>
      <style>{`
        .text-input-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 2rem;
        }
        
        .text-input {
          width: 300px;
          padding: 0.5rem;
          font-size: 1.1rem;
          border: 2px solid #ccc;
          border-radius: 4px;
          outline: none;
          color: transparent;
          caret-color: #333; /* Makes cursor visible while text is invisible */
        }
        
        .text-input::placeholder {
          color: #999; /* Keep placeholder visible */
          opacity: 1;
        }
        
        .text-input:focus {
          border-color: #007bff;
        }
        
        .displayed-text {
          min-height: 1.5rem;
          font-size: 1.2rem;
          color: #333;
        }
        
        .word-count {
          font-size: 0.9rem;
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default TextInput; 