import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Main from './Pages/Main/Main';
import Services from "./Pages/Services/Services.jsx";
import { Route, Routes } from "react-router-dom";





const App = () => {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='Services' element={<Services />}/>
      {/* <Main />
      <Services /> */}
      </Routes>
      <Footer/>
    </>
  )
}

export default App
