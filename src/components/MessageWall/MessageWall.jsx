import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import formatTime from '../../helpers/formatTime';
import updateScroll from '../../helpers/updateScroll';
import returnMessageRow from '../../helpers/returnMessageRow';
import './MessageWall.scss';

const MessageWall = ({
    username,
    messages,
    currentChat,
}) => {
    useEffect(() => updateScroll());
    return (
        <div id="messageWall">
            <ul>
                {(returnMessageRow(currentChat, messages) || []).map(msg => (
                    <li
                        key={uid(msg)}
                        className={msg[0] === username ? 'outgoing' : 'incoming'}
                    >
                        <div className="messageWrapper">
                            <p>
                                <span className="username">{msg[0]}</span>
                                <span className="time">{formatTime(msg[1])}</span>
                            </p>
                            <p className="message">{msg[2]}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
MessageWall.propTypes = {
    username: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(PropTypes.array).isRequired,
    currentChat: PropTypes.string.isRequired,
};

export default MessageWall;
