import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import Main from './components/Main/MainContainer';
import './App.scss';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <Main />
        <div id="smallScreen">
            <p>Please use the mobile app on small screens.</p>
        </div>
    </Provider>
);

export default App;
