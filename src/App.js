import logo from './logo.svg';

import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './components/login/login';


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />

                <div className='app-wrapper-content'>
                    <Route path='/Dialogs' render={() => <DialogsContainer />} />
                    <Route path='/Profile/:userId?' render={() => <ProfileContainer />} />
                    <Route path='/Users' render={() => <UsersContainer />} />
                    <Route path='/News' render={() => <News />} />
                    <Route path='/Music' render={() => <Music />} />
                    <Route path='/Settings' render={() => <Settings />} />
                    <Route path='/Login' render={() => <LoginPage />} />

                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;