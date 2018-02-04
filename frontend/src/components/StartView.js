import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../styles/app.css'

const StartView = ({isPauseButton, disabled, onClick}) => {
    return (
        <button onClick={
            () => {
                onClick(isPauseButton)
            }}
            disabled={disabled}>
            {isPauseButton ? "暂停" : "开始"}
        </button>
    )
}

StartView.propTypes = {
    isPauseButton: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
}

export default CSSModules(StartView, styles);