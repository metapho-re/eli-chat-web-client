import { connect } from 'react-redux';
import {
    logIn,
    signUp,
} from '../../redux/thunkMiddleware';
import {
    handleUsernameChange,
    handlePasswordChange,
} from '../../redux/actionCreators';
import Authenticate from './Authenticate';

const mapStateToProps = state => ({
    socketId: state.socket.id,
    usernameValue: state.usernameValue,
    passwordValue: state.passwordValue,
    isLoadingLogIn: state.authenticateStatus.isLoadingLogIn,
    isLoadingSignUp: state.authenticateStatus.isLoadingSignUp,
    errorMessage: state.authenticateStatus.errorMessage,
});

const mapDispatchToProps = dispatch => ({
    logIn: credentials => dispatch(logIn(credentials)),
    signUp: credentials => dispatch(signUp(credentials)),
    handleUsernameChange: value => dispatch(handleUsernameChange(value)),
    handlePasswordChange: value => dispatch(handlePasswordChange(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Authenticate);
