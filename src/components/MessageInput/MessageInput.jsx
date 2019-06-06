import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import formatMessage from '../../helpers/formatMessage';
import './MessageInput.scss';

const MessageInput = ({
    username,
    messageValue,
    currentChat,
    storeSentMessage,
    handleMessageChange,
}) => (
    <div id="messageInput">
        <Form.Control
            id="inputField"
            type="text"
            placeholder="Type your message here..."
            value={messageValue}
            onChange={e => handleMessageChange(e.currentTarget.value)}
            onKeyUp={e => (e.key === 'Enter')
                && (messageValue.length !== 0)
                && (currentChat.length !== 0)
                && storeSentMessage(formatMessage(username, messageValue, currentChat))}
        />
        <Button
            id="sendButton"
            type="button"
            disabled={(messageValue.length === 0) || (currentChat.length === 0)}
            onClick={() => storeSentMessage(formatMessage(username, messageValue, currentChat))}
        >
            Send
        </Button>
    </div>
);
MessageInput.propTypes = {
    username: PropTypes.string.isRequired,
    messageValue: PropTypes.string.isRequired,
    currentChat: PropTypes.string.isRequired,
    storeSentMessage: PropTypes.func.isRequired,
    handleMessageChange: PropTypes.func.isRequired,
};

export default MessageInput;
