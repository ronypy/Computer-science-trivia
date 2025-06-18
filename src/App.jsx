import React, { useState } from 'react';
import './App.css';

const App = () => {
  const cards = [
    { question: "Who is known as the 'Father of Computer Science'?",  
      answer: "Alan Turing" },
    { question: "What does 'HTTP' stand for?", 
      answer: "HyperText Transfer Protocol" },
    { question: "What is the time complexity of binary search on a sorted array?", 
      answer: "O(log n)" },
    { question: "Which data structure uses FIFO (First In, First Out) ordering?", 
      answer: "Queue" },
    { question: "In object-oriented programming, what does 'DRY' stand for?", 
      answer: "Don't Repeat Yourself" },
    { question: "What is the primary purpose of the OSI model?", 
      answer: "To standardize network communications into seven layers" },
    { question: "Which algorithm is commonly used to find the shortest path in a weighted graph?", 
      answer: "Dijkstra’s Algorithm" },
    { question: "What is a deadlock in operating systems?", 
      answer: "A situation where two or more processes are unable to proceed because each is waiting for the other to release a resource" },
    { question: "Which database properties does ACID refer to?", 
      answer: "Atomicity, Consistency, Isolation, Durability" },
    { question: "Who invented the World Wide Web?", 
      answer: "Tim Berners-Lee" },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [flipped, setFlipped]     = useState(false);

  const handleFlip = () => setFlipped(f => !f);
  const handleNext = () => {
    let next;
    do {
      next = Math.floor(Math.random() * cards.length);
    } while (next === currentIdx);
    setCurrentIdx(next);
    setFlipped(false);
  };

  const { question, answer } = cards[currentIdx];

  return (
    <div className="App">
      {/* HEADER */}
      <header className="header">
        <h1>The Computer science trivia!</h1>
        <p className="subtitle">
          How good of a Computer Scientist are you? Test all of your CS knowledge here!
        </p>
        <p className="count">Number of cards: {cards.length}</p>
      </header>

      {/* FLIP CARD */}
      <div className="card-container" onClick={handleFlip}>
        <div className={`card-inner${flipped ? ' flipped' : ''}`}>
          <div className="card-face front">
            {question}
          </div>
          <div className="card-face back">
            {answer}
          </div>
        </div>
      </div>

      {/* NEXT BUTTON */}
      <button className="next-btn" onClick={handleNext}>→</button>
    </div>
  );
};

export default App;
