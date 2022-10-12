import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppContext from './AppContext';
import "flickity/dist/flickity.css";
import "./bootstrap.min.css";
import "./index.css";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <AppContext><App /></AppContext>,
  document.getElementById('root')
);

reportWebVitals();
