import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

type AppProps = {

}

const App: React.FC<AppProps> = ({ }) => {

    return (
        <div className="container">
            <Route path="/dialogs"
                   component={() => <DialogsContainer />}/>
            <Route path="/" exact component={() => <Profile />}/>
            <Header/>
            <Navigation/>
        </div>
    );
}

export default App;
