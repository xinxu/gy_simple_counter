import React from 'react'
import Connection from '../containers/Connection'
import Counter from '../containers/Counter'
import Starter from '../containers/Starter'
import CSSModules from 'react-css-modules'
import styles from '../styles/app.css'

const App = () => (
  <div styleName='app'>
    <Counter />
    <Starter />
    {/* <Reseter /> */}
    <Connection />
  </div>
)

export default CSSModules(App, styles)