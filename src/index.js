import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>How are you doing today?</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root
root.render(<App />);  // Render the App component
