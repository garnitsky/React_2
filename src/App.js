import logo from './logo.svg';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings'
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />

                <div className='app-wrapper-content'>
                    <Route path='/Dialogs' render={() => <DialogsContainer />} />
                    <Route path='/Profile' render={() => <Profile />} />
                    <Route path='/News' render={() => <News />} />
                    <Route path='/Music' render={() => <Music />} />
                    <Route path='/Settings' render={() => <Settings />} />
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;