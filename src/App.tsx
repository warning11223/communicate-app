import React, {lazy} from 'react';
import Navigation from './components/Navigation/Navigation';
import {Redirect, Route, Switch} from 'react-router-dom';
import Greetings from './components/Greetings/Greetings';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/LoginPage/LoginPage';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {connect} from 'react-redux';
import {RootState} from './redux/reduxStore';
import {initializeAppTC} from './redux/reducers/app/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import './App.css';
import {withSuspense} from './common/withSuspense';
import {Page404} from './components/Page404/Page404';

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'))

type AppProps = {
    initializeAppTC: () => void
    initialized: boolean
}

type MapStateToPropsType = {
    initialized: boolean
}

const UsersContainerWithSuspense = withSuspense(UsersContainer)
const DialogsContainerWithSuspense = withSuspense(DialogsContainer)
const ProfileContainerWithSuspense = withSuspense(ProfileContainer)

class App extends React.Component<AppProps> {
    componentDidMount() {
        this.props.initializeAppTC();

    }

    render() {
        /*if (!this.props.initialized) {
            return <Preloader />
        }*/

        return (
            <div className="container">
                <HeaderContainer/>
                <Navigation/>
                {
                    !this.props.initialized
                        ? <div style={{position: 'fixed', top: '10%', textAlign: 'center', width: '100%'}}>
                            <Preloader/>
                        </div>
                        :
                        <Switch>
                            <Route path="/" exact component={() => <Greetings/>}/>
                            <Route path="/profile/:userID?" component={ProfileContainerWithSuspense}/>
                            <Route path="/dialogs" component={DialogsContainerWithSuspense}/>
                            <Route path="/users/" component={UsersContainerWithSuspense}/>
                            <Route path="/login" component={() => <LoginPage/>}/>
                            <Route path="/news" component={() => <News/>}/>
                            <Route path="/music" component={() => <Music/>}/>
                            <Route path="/settings" component={() => <Settings/>}/>
                            <Route path="/page-404" component={() => <Page404/>}/>

                            <Route path="*" component={() => <Redirect to={"/page-404"}/>} />
                        </Switch>
                }
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
