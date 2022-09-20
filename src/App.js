import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
