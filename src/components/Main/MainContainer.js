import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = state => ({
    isAuthenticated: state.authenticate.isAuthenticated,
    username: state.authenticate.username,
});

export default connect(mapStateToProps)(Main);
