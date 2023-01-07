
import { Route, Routes } from "react-router-dom";
import Home from './components/home/Home';
import NavBar from './components/navBar/NavBar';
import { Box } from "@mui/material";

function App() {
  
  return (
    <div>
      <Box>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nav' element={<NavBar />} />
        </Routes>
      </Box>
      
    </div>
  );
}

export default App;
