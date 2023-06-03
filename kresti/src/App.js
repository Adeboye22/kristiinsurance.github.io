import {Routes, Route} from 'react-router-dom';
import './App.css';
import Onboarding from './components/LoggedOut/Onboarding';
import Login from './components/LoggedOut/Login'
import SignUp from './components/LoggedOut/SignUp';

function App() {
  return (
    <>
      <Routes>
        <Route path = '/' element = {<Onboarding />} />
        <Route path = '/login' element = {<Login />} />
        <Route path = '/signup' element = {<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
