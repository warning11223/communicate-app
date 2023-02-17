import React from 'react';
import './index.css';

import App from './App';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {reduxStore} from './redux/reduxStore';
import {Provider} from 'react-redux';


const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={reduxStore}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);


