import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './App/store';
import { BrowserRouter } from 'react-router-dom'
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <NextUIProvider>
      <App />
    </NextUIProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

