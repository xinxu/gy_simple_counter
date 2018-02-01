import React, { Component } from 'react';
import CSSModules from 'react-css-modules'
import styles from 'Styles/counter.css'

class Counter extends React.Component {
    render() {
        return (
            <div styleName='container'>
            <button styleName='start' onClick={this.addTeam}>开始计数</button>
            </div>
        )
    }
}

export default CSSModules(Counter, styles);
