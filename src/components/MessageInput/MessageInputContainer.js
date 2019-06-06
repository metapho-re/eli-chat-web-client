import { connect } from 'react-redux';
import {
    storeSentMessage,
    handleMessageChange,
} from '../../redux/actionCreators';
import MessageInput from './MessageInput';
import getCurrentChat from '../../helpers/getCurrentChat';

const mapStateToProps = state => ({
    username: state.authenticate.username,
    messageValue: state.messageValue,
    currentChat: getCurrentChat(state.chats),
});

const mapDispatchToProps = dispatch => ({
    storeSentMessage: msg => dispatch(storeSentMessage(msg)),
    handleMessageChange: value => dispatch(handleMessageChange(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
