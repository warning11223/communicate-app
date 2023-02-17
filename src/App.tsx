import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

type AppProps = {

}

const App: React.FC<AppProps> = ({ }) => {

    return (
        <div className="container">
            <Header/>
            <Navigation/>
            <Route path="/" exact component={() => <Profile />}/>
            <Route path="/dialogs" component={() => <DialogsContainer />}/>
            <Route path={"/users"} component={() => <UsersContainer />}/>
        </div>
    );
}

export default App;
