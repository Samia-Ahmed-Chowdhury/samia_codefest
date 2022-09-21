import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import LogIn from './Components/Login_Out/LogIn';
import Regi from './Components/Login_Out/Regi';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home/>}></Route>
          <Route  path="/login" element={<LogIn/>}></Route>
          <Route  path="/regi" element={<Regi/>}></Route>

        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
