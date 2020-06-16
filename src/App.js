import React from 'react';

import GlobalStyles from './GlobalStyles';

import Header  from './components/Header';
import Content from './components/Content';
import CreatedBy from './components/CreatedBy';

function App() {
  return (
    <>
      <GlobalStyles />

      <Header />
      <Content />
      <CreatedBy />
    </>
  );
}

export default App;
