import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='services' element={<Services></Services>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
