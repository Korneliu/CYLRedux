import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import Header from '../src/components/Header';
import { createStore } from 'redux';

const store = createStore = ((state = { count: 0 },) => {

});


const template = (
  <div>
    <Header />
  </div>
)

ReactDOM.render(template, document.getElementById('app'))

