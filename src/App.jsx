
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Home from './components/home/Home';
import NavBar from './components/navBar/NavBar';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Error404 from './components/error404/Error404';

function App() {
  
  return (
    <div>
      <NavBar />
      <Box>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Box>
      
    </div>
  );
}

export default App;
