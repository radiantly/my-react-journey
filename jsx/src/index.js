// Import the React and the ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
  return 'Click on me!';
}
// Create a react component
const App = function() {
  return (
    <div>
      <label htmlFor="name" className="label">Enter name:</label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>{getButtonText()}</button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.getElementById("root")
);