import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Newproject from './newproject';
// import State from './state';
// import Amazon from './amazon';
import Layoutpractice from './layoutpractice';
import Decoration from './decoration';
// import Designant from './designant';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Newproject/> */}
    {/* <State/> */}
    {/* <Amazon/> */}
    <Layoutpractice/>
    <Decoration/>
    {/* <Designant/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
