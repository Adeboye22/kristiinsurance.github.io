import {Routes, Route} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About'
import Register from './components/Register'
import Login from './components/Login'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route to = '/' element = {<Home />} />
        <Route to = '/Services' element = {<Services />} />
        <Route to = '/Contact' element = {<Contact />} />
        <Route to = '/About' element = {<About />} />
        <Route to = '/Register' element = {<Register />} />
        <Route to = '/Login' element = {<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
