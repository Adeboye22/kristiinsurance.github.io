import {Routes, Route} from 'react-router-dom';
import './App.css';
import Onboarding from './components/LoggedOut/Onboarding';
import Login from './components/LoggedOut/Login';
import SignUp from './components/LoggedOut/SignUp';
import ForgotPass from './components/LoggedOut/ForgotPass';

function App() {
  return (
    <>
      <Routes>
        <Route path = '/' element = {<Onboarding />} />
        <Route path = '/login' element = {<Login />} />
        <Route path = '/signup' element = {<SignUp />} />
        <Route path = '/forgot-password' element = {<ForgotPass />} />
      </Routes>
    </>
  );
}

export default App;
