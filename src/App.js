import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <script src="https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.6.0/js-cloudimage-360-view.min.js"></script>
      <div
   class="cloudimage-360"
   data-folder="https://elasticbeanstalk-us-east-2-182336593385.s3.us-east-2.amazonaws.com/Cherry+Blossom/"
   data-filename="Cherry+Blossom_{index}.jpg"
   data-amount="10"
   data-index-zero-base="5"
></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2</h1>
      </header>
    </div>
  );
}

export default App;