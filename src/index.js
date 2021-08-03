import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'animate.css';
import 'react-notifications-component/dist/theme.css';
import '@brainhubeu/react-carousel/lib/style.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import websocketApi from './lib/websocket';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
