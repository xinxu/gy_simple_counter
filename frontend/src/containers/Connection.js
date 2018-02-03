import { connect } from 'react-redux'
import { ConnectionView } from '../components/ConnectionView'
import { ConnectionStatus } from '../constants'
import { connectServer } from '../actions'

const statusToText = status => {
    switch (status) {
        case ConnectionStatus.CONNECTED:
            return '已连接'
        case ConnectionStatus.CONNECTING:
            return '连接中...'
        case ConnectionStatus.NOT_CONNECTED:
            return '未连接'
        default:
            return ''
    }
}

const mapStateToProps = (state) => {
    return {
        text: statusToText(state.connectionStatus),
        showButton: state.connectionStatus == ConnectionStatus.NOT_CONNECTED
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onConnectClick: () => {
            dispatch(connectServer())
        }
    }
}


const Connection = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectionView)

export default Connection