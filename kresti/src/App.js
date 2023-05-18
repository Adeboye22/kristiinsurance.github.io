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
        <Route path = '/' element = {<Home />} />
        <Route path = '/Services' element = {<Services />} />
        <Route path = '/Contact' element = {<Contact />} />
        <Route path = '/About' element = {<About />} />
        <Route path = '/Register' element = {<Register />} />
        <Route path = '/Login' element = {<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
