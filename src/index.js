import React from 'react';
import ReactDOM from 'react-dom';

import Toggle from './components/toggle';
import Clock from './components/clock';
import App from './App';
import { Square, Label, Card } from './components/color-palette';
import { Sample } from './components/returning-jsx';
import Lightning  from './components/lightning-counter';
import Circle from './components/events';
import Counter from './components/events'
import Colorizer from './components/portals';
import IpAddress from './components/ip-address-container';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

let element = <Colorizer /> 
ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();
