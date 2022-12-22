import React, { useState } from 'react';

const QuoteBox = (props) => {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [color, setColor] = useState(null);

  // Function to get a random quote from the quotes array
  const getRandomQuote = () => {
    // Generate a random number between 0 and the length of the quotes array
    const randomIndex = Math.floor(Math.random() * props.quotes.length);
    // Get the quote and author from the random index of the quotes array
    const randomQuote = props.quotes[randomIndex];
    const randomAuthor = randomQuote.author;
    // Set the quote and author states with the random quote and author
    setQuote(randomQuote.quote);
    setAuthor(randomAuthor);
    // Generate a random color and set it as the background color
    setColor(getRandomColor());
  }

  // Function to generate a random color
  const getRandomColor = () => {
    // Generate random values for red, green, and blue
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // Return the random color as a string in the format "rgb(r, g, b)"
    return `rgb(${r}, ${g}, ${b})`;
  }

  // Render the quote and author in a quote box with a button to get a new quote
  return (
    <div className="quote-box" style={{ backgroundColor: color }}>
      <p className="quote">"{quote}"</p>
      <p className="author">- {author}</p>
      <button className="button" onClick={getRandomQuote} style={{ backgroundColor: color }}>Get new quote</button>
    </div>
  );
}

export default QuoteBox;
