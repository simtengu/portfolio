import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppContext from './AppContext';
import "./bootstrap.min.css";
import "./index.css";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import reportWebVitals from './reportWebVitals';
document.title = "MY PORTFOLIO";
// const store = createStore(rootReducer  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <AppContext><App /></AppContext>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
