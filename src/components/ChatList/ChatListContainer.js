import { connect } from 'react-redux';
import { selectChat } from '../../redux/actionCreators';
import ChatList from './ChatList';

const mapStateToProps = state => ({
    chats: state.chats,
});

const mapDispatchToProps = dispatch => ({
    selectChat: chatId => dispatch(selectChat(chatId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
