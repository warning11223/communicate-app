import React from 'react';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Greetings from './components/Greetings/Greetings';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/LoginPage/LoginPage';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {connect} from 'react-redux';
import {RootState} from './redux/reduxStore';
import {initializeAppTC} from './reducers/appReducer';

type AppProps = {
    initializeAppTC: () => void
    initialized: boolean
}

type MapStateToPropsType = {
    initialized: boolean
}

class App extends React.Component<AppProps> {

    componentDidMount() {
        this.props.initializeAppTC();
    }

    render() {
       /* if (!this.props.initialized) {
            return <Preloader />
        }*/

        return (
            <div className="container">
                <HeaderContainer/>
                <Navigation/>
                <Route path="/" exact component={() => <Greetings/>}/>
                <Route path="/profile/:userID?" component={() => <ProfileContainer/>}/>
                <Route path="/dialogs" component={() => <DialogsContainer/>}/>
                <Route path="/users/" component={() => <UsersContainer/>}/>
                <Route path="/login" component={() => <LoginPage/>}/>
                <Route path="/news" component={() => <News/>}/>
                <Route path="/music" component={() => <Music/>}/>
                <Route path="/settings" component={() => <Settings/>}/>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        initialized: state.appReducer.initialized
    }
}
export default connect(mapStateToProps, {initializeAppTC})(App);
