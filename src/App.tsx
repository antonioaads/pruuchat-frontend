import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './global';
import Routes from './routes';

const App = (): React.ReactElement  => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
