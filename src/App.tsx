import React from 'react';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Greetings from './components/Greetings/Greetings';
import HeaderContainer from './components/Header/HeaderContainer';

type AppProps = {

}

const App: React.FC<AppProps> = ({ }) => {

    return (
        <div className="container">
            <HeaderContainer />
            <Navigation/>
            <Route path="/" exact component={() => <Greetings />}/>
            <Route path="/profile/:userID?" component={() => <ProfileContainer />}/>
            <Route path="/dialogs" component={() => <DialogsContainer />}/>
            <Route path="/users/" component={() => <UsersContainer />}/>
        </div>
    );
}

export default App;
