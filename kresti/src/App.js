import {Routes, Route} from 'react-router-dom';
import './App.css';
import Onboarding from './components/LoggedOut/Onboarding';
import Login from './components/LoggedOut/Login'

function App() {
  return (
    <>
      <Routes>
        <Route path = '/' element = {<Onboarding />} />
        <Route path = '/login' element = {<Login />} />
      </Routes>
    </>
  );
}

export default App;
