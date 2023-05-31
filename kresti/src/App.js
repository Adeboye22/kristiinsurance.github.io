import {Routes, Route} from 'react-router-dom';
import './App.css';
import Onboarding from './components/LoggedOut/Onboarding';


function App() {
  return (
    <>
      <Routes>
        <Route path = '/' element = {<Onboarding />} />
      </Routes>
    </>
  );
}

export default App;
