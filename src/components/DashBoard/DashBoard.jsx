import React from 'react';
import DataFetcher from '../DataFetcher/DataFetcherContainer';
import Header from '../Header/HeaderContainer';
import UserList from '../UserList/UserListContainer';
import ChatList from '../ChatList/ChatListContainer';
import MessageWall from '../MessageWall/MessageWallContainer';
import MessageInput from '../MessageInput/MessageInputContainer';
import Loader from '../Loader/LoaderContainer';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplayContainer';
import './DashBoard.scss';

const DashBoard = () => (
    <div id="dashBoard">
        <DataFetcher />
        <Header />
        <div className="d-flex flex-row">
            <UserList />
            <ChatList />
            <div>
                <MessageWall />
                <MessageInput />
            </div>
        </div>
        <Loader />
        <ErrorDisplay />
    </div>
);

export default DashBoard;
