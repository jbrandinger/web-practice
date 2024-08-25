import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import
import './index.css';  // Import the CSS file

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <img 
        src="https://avatars.githubusercontent.com/u/98676769?v=4" 
        alt="My GitHub Avatar"
        style={{ borderRadius: '50%', width: '150px', height: '150px' }}
      />
      <h1>Hello World</h1>
      <p>My name is Joel</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root
root.render(<App />);  // Render the App component
