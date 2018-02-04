import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from '../styles/app.css'

const HeaderView = () => {
    return (
        <div styleName='header'>
            <img src={require('../assets/gy_logo.png')} />
            简单计时器
        </div>
    )
}

export default CSSModules(HeaderView, styles)