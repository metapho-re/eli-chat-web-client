import { connect } from 'react-redux';
import {
    fetchMessages,
    fetchUsers,
} from '../../redux/thunkMiddleware';
import DataFetcher from './DataFetcher';
import extractChatIds from '../../helpers/extractChatIds';

const mapStateToProps = state => ({
    token: state.authenticate.token,
    username: state.authenticate.username,
    chats: extractChatIds(state.chats),
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: (token, username) => dispatch(fetchUsers(token, username)),
    fetchMessages: (token, chats) => dispatch(fetchMessages(token, chats)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataFetcher);
