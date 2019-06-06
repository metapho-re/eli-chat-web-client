import { connect } from 'react-redux';
import { toggleUserForChat } from '../../redux/actionCreators';
import { createChat } from '../../redux/thunkMiddleware';
import UserList from './UserList';

const mapStateToProps = state => ({
    users: state.users.sort(),
    username: state.authenticate.username,
    token: state.authenticate.token,
    isLoading: state.chatsStatus.isLoading,
});

const mapDispatchToProps = dispatch => ({
    toggleUserForChat: username => dispatch(toggleUserForChat(username)),
    createChat: (token, chatId, users) => dispatch(createChat(token, chatId, users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
