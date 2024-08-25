import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import
import './index.css';  // Import the CSS file

function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root
root.render(<App />);  // Render the App component
