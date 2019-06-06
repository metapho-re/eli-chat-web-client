import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';
import './Loader.scss';

const Loader = ({
    usersIsLoading,
    messagesIsLoading,
    chatsIsLoading,
    logOutIsLoading,
}) => {
    if (usersIsLoading || messagesIsLoading || chatsIsLoading || logOutIsLoading) {
        return (
            <div id="loaderScreen">
                <div id="loaderBox" className="d-flex flex-column">
                    <p>Loading...</p>
                    <div id="spinners">
                        <Spinner animation="grow" size="sm" />
                        <Spinner animation="grow" size="sm" />
                        <Spinner animation="grow" size="sm" />
                    </div>
                </div>
            </div>
        );
    }
    return <></>;
};
Loader.propTypes = {
    usersIsLoading: PropTypes.bool.isRequired,
    messagesIsLoading: PropTypes.bool.isRequired,
    chatsIsLoading: PropTypes.bool.isRequired,
    logOutIsLoading: PropTypes.bool.isRequired,
};

export default Loader;
