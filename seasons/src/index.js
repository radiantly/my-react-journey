import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     error => console.log(`Error: ${error}`) 
//   );
//   return <div>Hi there!</div>;
// };

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      error => console.log(`Error: ${error}`) 
    );

    return <div>Latitude1:</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));