import { connect } from 'react-redux';
import MessageWall from './MessageWall';
import getCurrentChat from '../../helpers/getCurrentChat';

const mapStateToProps = state => ({
    username: state.authenticate.username,
    messages: state.messages,
    currentChat: getCurrentChat(state.chats),
});

export default connect(mapStateToProps)(MessageWall);
