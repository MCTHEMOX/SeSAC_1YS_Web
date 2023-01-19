import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; //프로바이더 임포트
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store/index'; //컴바인리듀서 가져옴

const store = configureStore({ reducer: rootReducer }); //외워라
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
