import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createRoot } from 'react-dom/client';
import { createLogger } from 'redux-logger';
import { thunk } from 'redux-thunk';
import { searchRobots } from './reducers'; 
import './index.css';
import App from './containers/App';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';

const logger = createLogger();
const store = configureStore({
  reducer: {
    searchRobots: searchRobots
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger)
});

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

registerServiceWorker();
