import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import Header from '../src/components/Header';

const template = (
  <div>
    <Header />
  </div>
)

ReactDOM.render(template, document.getElementById('app'))

