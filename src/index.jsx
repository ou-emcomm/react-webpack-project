import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
  const earth = 'world';
  return (
    <h1>
      Hello
      {` ${earth}`}
    </h1>
  );
};

ReactDom.render(<App />, document.getElementById('react-root'));
