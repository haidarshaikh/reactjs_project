
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Routes , Route} from 'react-router-dom'
import "./App.css";
import HomePage from "./pages/HomePage";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import DarkVariantExample from "./components/Banner";
import Navbar from "./components/Navbar";
import AllRoutes from './AllRoutes';



const App = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    {/* <DarkVariantExample/> */}
    <AllRoutes/>
    
    <Footer/>
    </>
  );
};

export default App;
