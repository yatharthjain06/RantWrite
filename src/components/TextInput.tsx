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
        spellCheck="false"
        autoCorrect="off"
        autoCapitalize="off"
        data-gramm="false"
        data-gramm_editor="false"
        data-enable-grammarly="false"
      />
      <div className="displayed-text">
        {displayedWords.join(' ')}
      </div>
      <div className="word-count">
        Words: {wordCount}
      </div>
      <style>{`
        :root {
          --primary-blue: #1e88e5;
          --light-blue: #e3f2fd;
          --secondary-blue: #bbdefb;
          --primary-orange: #ff9800;
          --light-orange: #fff3e0;
        }

        body {
          background: linear-gradient(135deg, var(--light-blue) 20%, var(--secondary-blue) 40%, var(--light-orange) 100%);
          min-height: 100vh;
          margin: 0;
        }

        .text-input-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.85);
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(30, 136, 229, 0.15);
          backdrop-filter: blur(10px);
        }
        
        .text-input {
          width: 300px;
          padding: 0.8rem;
          font-size: 1.1rem;
          border: 2px solid var(--primary-blue);
          border-radius: 8px;
          outline: none;
          color: transparent;
          caret-color: var(--primary-orange);
          -webkit-text-fill-color: transparent;
          -webkit-box-shadow: 0 0 0px 1000px white inset;
          transition: border-color 0.3s ease;
          background: white;
        }
        
        .text-input::placeholder {
          color: #94a3b8;
          opacity: 1;
          -webkit-text-fill-color: #94a3b8;
        }
        
        .text-input:focus {
          border-color: var(--primary-orange);
          box-shadow: 0 0 0 3px var(--light-orange);
        }
        
        .displayed-text {
          min-height: 1.5rem;
          font-size: 1.2rem;
          color: var(--primary-blue);
          padding: 0.5rem 1rem;
          background: var(--light-blue);
          border-radius: 6px;
          transition: all 0.3s ease;
        }
        
        .word-count {
          font-size: 0.9rem;
          color: var(--primary-orange);
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default TextInput; 