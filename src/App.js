import React from 'react';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
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
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route exact path="*" Component={<ErrorPage />} /> */}
      </Switch>
      <Footer />
    </Router>

  );
  

}


export  default App;
