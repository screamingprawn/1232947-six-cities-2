import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <h2>Welcome to the site </h2>;
};

const init = () => {
  ReactDOM.render(
      <App />,
      document.querySelector(`#root`)
  );
};

init();
