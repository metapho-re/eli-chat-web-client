import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import getPropertiesFromChatId from '../../helpers/getPropertiesFromChatId';
import './ChatList.scss';

const ChatList = ({
    chats,
    selectChat,
}) => (
    <div id="chatList">
        <div>
            <p>Select a Chat</p>
        </div>
        <ul>
            {(chats || []).map(chat => (
                <li
                    key={chat[0]}
                    className={chat[1] ? 'selected' : ''}
                >
                    <Button
                        type="button"
                        chatid={chat[0]}
                        onClick={e => selectChat(e.target.getAttribute('chatid'))}
                    >
                        {getPropertiesFromChatId(chat[0]).usernames}
                        <br />
                        {getPropertiesFromChatId(chat[0]).date}
                    </Button>
                </li>
            ))}
        </ul>
    </div>
);
ChatList.propTypes = {
    chats: PropTypes.arrayOf(PropTypes.array).isRequired,
    selectChat: PropTypes.func.isRequired,
};

export default ChatList;
