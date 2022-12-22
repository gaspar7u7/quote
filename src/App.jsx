import React, { useState, useEffect } from 'react';
import QuoteBox from './QuoteBox';

const App = () => {
  const [quotes, setQuotes] = useState([]);

  // Use the useEffect hook to fetch the quotes from the JSON file when the component mounts
  useEffect(() => {
    // Use the fetch API to get the quotes from the JSON file
    fetch('quotes.json')
      .then(response => response.json())
      .then(data => setQuotes(data));
  }, []);

  // Render the App component
  return (
    <div className="app">
      <h1>Random Quote Generator</h1>
      <QuoteBox quotes={quotes} />
    </div>
  );
}

export default App;
