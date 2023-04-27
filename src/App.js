import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import { Routes,Route, } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/contacts" element={<Contact/>}/>  
      
      
    </Routes>
    </div>
  );
}

export default App;
