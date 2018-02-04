import { connect } from 'react-redux'
import ConnectionView from '../components/ConnectionView'

const statusToText = connected => {
    if (connected) {
        return '已连接'
    }
    return '未连接'
}

const mapStateToProps = (state) => {
    return {
        text: statusToText(state.connected)
    }
}

const Connection = connect(
    mapStateToProps
)(ConnectionView)

export default Connection