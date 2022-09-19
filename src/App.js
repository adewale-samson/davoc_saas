import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Main from './Pages/Main/Main';
import Services from "./Pages/Services/Services.jsx"





const App = () => {
  
  return (
    <>
      <Navbar />
      <div>
      <Main />
      <Services />
      </div>
      <Footer/>
    </>
  )
}

export default App
