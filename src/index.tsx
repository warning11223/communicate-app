import React from 'react';
import './index.css';


import ReactDOM from 'react-dom';
import App from './App';
import {store} from './redux/state';

const rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}


rerenderEntireTree();
store.subscribe(rerenderEntireTree)
