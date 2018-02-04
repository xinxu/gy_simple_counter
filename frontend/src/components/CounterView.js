
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../styles/app.css'

const CounterView = ({value}) => {
    return (
        <div>{value}</div>
    )
}

CounterView.propTypes = {
    value: PropTypes.string.isRequired,
}

export default CSSModules(CounterView, styles);