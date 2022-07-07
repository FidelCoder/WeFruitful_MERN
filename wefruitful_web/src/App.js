//import logo from './logo.svg';
import './App.css';
/*import Navbar from './components/Navbar'*/
import Home from './components/Home'
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contacts';
import {Route, Routes, /*Switch*/} from 'react-router-dom'


function App() {
  return (
    
    <>
    <Routes>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/service' component={Services}/>
      <Route exact path='/contact' component={Contact}/>
    </Routes>
    </>
  );
}

export default App;
