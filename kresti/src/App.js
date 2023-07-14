import {Routes, Route} from 'react-router-dom';
import Onboarding from './components/LoggedOut/Onboarding';
import Login from './components/LoggedOut/Login';
import SignUp from './components/LoggedOut/SignUp';
import ForgotPass from './components/LoggedOut/ForgotPass';
import ResetPass from './components/LoggedOut/ResetPass';
import Homepage from './components/LoggedIn/Homepage';
import Services from './components/LoggedIn/Services';
import About from './components/LoggedIn/About';
import Contact from './components/LoggedIn/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path = '/' element = {<Onboarding />} />
        <Route path = '/login' element = {<Login />} />
        <Route path = '/signup' element = {<SignUp />} />
        <Route path = '/forgot-password' element = {<ForgotPass />} />
        <Route path = '/reset-password' element = {<ResetPass />} />
        <Route path = '/homepage' element = {<Homepage />} />
        <Route path = '/services' element = {<Services />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '/contact' element = {<Contact />} />
      </Routes>
    </>
  );
}

export default App;