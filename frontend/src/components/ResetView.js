import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../styles/app.css'

const ResetView = ({disabled, onClick}) => {
    return (
        <button onClick={onClick}
            disabled={disabled}>
            重置
        </button>
    )
}

ResetView.propTypes = {
    disabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default CSSModules(ResetView, styles);
