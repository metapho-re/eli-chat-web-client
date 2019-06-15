import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import './ErrorDisplay.scss';

const ErrorDisplay = ({
    usersErrorMessage,
    messagesErrorMessage,
    chatsErrorMessage,
    socketErrorMessage,
    persistErrorMessage,
    logOutErrorMessage,
    clearErrorMessage,
}) => {
    if (chatsErrorMessage.length !== 0
        || messagesErrorMessage.length !== 0
        || usersErrorMessage.length !== 0
        || socketErrorMessage.length !== 0
        || persistErrorMessage.length !== 0
        || logOutErrorMessage.length !== 0) {
        return (
            <div id="errorScreen">
                <div id="errorBox" className="d-flex flex-column">
                    <div>
                        <div className="text-center">
                            <p>{usersErrorMessage.length !== 0 ? 'An error occured while fetching users:' : ''}</p>
                            <p>{usersErrorMessage}</p>
                        </div>
                        <div className="text-center">
                            <p>{messagesErrorMessage.length !== 0 ? 'An error occured while fetching messages:' : ''}</p>
                            <p>{messagesErrorMessage}</p>
                        </div>
                        <div className="text-center">
                            <p>{chatsErrorMessage.length !== 0 ? 'An error occured during chat creation:' : ''}</p>
                            <p>{chatsErrorMessage}</p>
                        </div>
                        <div className="text-center">
                            <p>{socketErrorMessage.length !== 0 ? 'An error occured on the web socket...' : ''}</p>
                        </div>
                        <div className="text-center">
                            <p>{persistErrorMessage.length !== 0 ? 'An error occured while trying to save messages:' : ''}</p>
                            <p>{persistErrorMessage}</p>
                        </div>
                        <div className="text-center">
                            <p>{logOutErrorMessage.length !== 0 ? 'An error occured while trying to log out:' : ''}</p>
                            <p>{logOutErrorMessage}</p>
                        </div>
                    </div>
                    <p>Please try again later...</p>
                    <Button
                        type="button"
                        onClick={() => clearErrorMessage()}
                    >
                        Dismiss
                    </Button>
                </div>
            </div>
        );
    }
    return <></>;
};
ErrorDisplay.propTypes = {
    usersErrorMessage: PropTypes.string.isRequired,
    messagesErrorMessage: PropTypes.string.isRequired,
    chatsErrorMessage: PropTypes.string.isRequired,
    socketErrorMessage: PropTypes.string.isRequired,
    persistErrorMessage: PropTypes.string.isRequired,
    logOutErrorMessage: PropTypes.string.isRequired,
    clearErrorMessage: PropTypes.func.isRequired,
};

export default ErrorDisplay;
