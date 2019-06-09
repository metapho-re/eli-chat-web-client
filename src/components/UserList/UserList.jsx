import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { uid } from 'react-uid';
import hasSelectedUser from '../../helpers/hasSelectedUser';
import createChatId from '../../helpers/createChatId';
import './UserList.scss';

const UserList = ({
    users,
    username,
    token,
    isLoading,
    toggleUserForChat,
    createChat,
}) => (
    <div id="userList">
        <div id="userListHeader">
            <Button
                type="button"
                disabled={!hasSelectedUser(users) || isLoading}
                onClick={() => createChat(
                    token,
                    createChatId([...users, [username, '', true]]),
                    [...users, [username, '', true]],
                )}
            >
                Create a Chat
            </Button>
        </div>
        <div id="userListBody">
            <ul>
                {(users || []).map(user => (
                    <li
                        key={uid(user)}
                        className={user[2] ? 'selected' : ''}
                    >
                        <Button
                            type="button"
                            className={(user[1].length !== 0) ? 'online' : 'offline'}
                            username={user[0]}
                            socketid={user[1]}
                            onClick={e => toggleUserForChat(e.target.getAttribute('username'))}
                        >
                            {user[0]}
                            {' '}
                            {(user[1].length !== 0) ? '(online)' : ''}
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);
UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.array).isRequired,
    username: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    toggleUserForChat: PropTypes.func.isRequired,
    createChat: PropTypes.func.isRequired,
};

export default UserList;
