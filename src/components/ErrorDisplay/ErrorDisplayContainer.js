import { connect } from 'react-redux';
import { clearErrorMessage } from '../../redux/actionCreators';
import ErrorDisplay from './ErrorDisplay';

const mapStateToProps = state => ({
    chatsErrorMessage: state.chatsStatus.errorMessage,
    messagesErrorMessage: state.messagesStatus.errorMessage,
    usersErrorMessage: state.usersStatus.errorMessage,
    socketErrorMessage: state.socket.errorMessage,
    persistErrorMessage: state.persistErrorMessage,
    logOutErrorMessage: state.logOutStatus.errorMessage,
});

const mapDispatchToProps = dispatch => ({
    clearErrorMessage: () => dispatch(clearErrorMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorDisplay);
