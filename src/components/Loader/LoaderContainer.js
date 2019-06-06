import { connect } from 'react-redux';
import Loader from './Loader';

const mapStateToProps = state => ({
    usersIsLoading: state.usersStatus.isLoading,
    messagesIsLoading: state.messagesStatus.isLoading,
    chatsIsLoading: state.chatsStatus.isLoading,
    logOutIsLoading: state.logOutStatus.isLoading,
});

export default connect(mapStateToProps)(Loader);
