import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AnalogClock} from "./analogclock/AnalogClock.js";

ReactDOM.render(
  <div className="clock">
    <AnalogClock />
  </div>,
  document.getElementById('root')
);
