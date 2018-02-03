import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from 'Styles/app.css'

const ConnectionView = ({text, showButton, onConnectClick}) => {
    if (showButton) {
        return (
            <div>
                <label>{text}</label>
                <button onClick={onConnectClick}>连接</button>
            </div>
        )
    }
    return (
        <div>
            <label>{text}</label>
        </div>
    )
}

ConnectionView.PropTypes = {
    text: PropTypes.string.isRequired,
    showButton: PropTypes.bool.isRequired,
    onConnectClick: PropTypes.func.isRequired
}

export default CSSModules(ConnectionView, styles);