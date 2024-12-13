import React from 'react';
import ReactDOM from 'react-dom/client';  // For React 18 and above
import App from './App';  // Make sure the path is correct for App.jsx
import './index.css';  // If you have global styles

// Get the root element in the HTML file where React will render
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root div
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);