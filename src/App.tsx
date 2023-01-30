import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {StoreType} from './redux/state';

type AppProps = {
    store: StoreType
}

const App: React.FC<AppProps> = ({store}) => {
    const state = store.getState();

    return (
        <div className="container">
            <BrowserRouter>
                <Route path="/dialogs" component={() => <Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}/>}/>
                <Route path="/" exact component={() => <Profile store={store}/>}/>
                <Header/>
                <Navigation/>
            </BrowserRouter>
        </div>
    );
}

export default App;
