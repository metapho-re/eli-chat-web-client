import { connect } from 'react-redux';
import { logOut } from '../../redux/thunkMiddleware';
import Header from './Header';

const mapStateToProps = state => ({
    username: state.authenticate.username,
    token: state.authenticate.token,
    isLoading: state.logOutStatus.isLoading,
});

const mapDispatchToProps = dispatch => ({
    logOut: token => dispatch(logOut(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
