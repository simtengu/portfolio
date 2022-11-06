import React from 'react';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ScrollToTop from './components/ScrollToTop';
// import ErrorPage from "./pages/ProjectDetails";
const App = () => {

  return(

    <Router>
      <ScrollToTop /> 
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Home} />
       
      </Switch>
      <Footer />
    </Router>

  );
  

}


export  default App;
