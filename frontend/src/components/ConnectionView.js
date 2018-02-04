import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../styles/app.css'

const ConnectionView = ({text}) => {
    return (
        <div>
            <label>{text}</label>
        </div>
    )
}

ConnectionView.propTypes = {
    text: PropTypes.string.isRequired,
}

export default CSSModules(ConnectionView, styles);