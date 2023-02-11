import React from 'react';
import './index.css';

import App from './App';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {reduxStore} from './redux/reduxStore';
import {Provider} from './helpers/Provider';

const domNode = document.getElementById('root');
const root = createRoot(domNode as HTMLElement);

//const root = createRoot(document.getElementById('root') as HTMLElement);

const rerenderEntireTree = () => {

    root.render(
        <Provider store={reduxStore}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
}

rerenderEntireTree();
//store.subscribe(rerenderEntireTree)
reduxStore.subscribe(rerenderEntireTree)
