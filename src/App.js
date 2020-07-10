import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import store from './store';
import Header from './components/Header';
import Routes from './Routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={1500} />
      </HashRouter>
    </Provider>
  );
}

export default App;
