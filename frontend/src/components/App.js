import React from 'react'
import Connection from '../containers/Connection'
import HeaderView from './HeaderView'
import Counter from '../containers/Counter'
import Starter from '../containers/Starter'
import Reseter from '../containers/Reseter'
import CSSModules from 'react-css-modules'
import styles from '../styles/app.css'

const App = () => (
  <div styleName='app'>
    <HeaderView />
    <Counter />
    <Starter />
    <Reseter />
    <Connection />
  </div>
)

export default CSSModules(App, styles)