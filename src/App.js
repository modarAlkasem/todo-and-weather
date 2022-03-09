import React,{useState} from "react";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Main from "./containers/Main/Main";
import CurrentWeather from "./containers/CurrentWeather/CurrentWeather";
import SideDrawer from "./components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";


import './App.css';



function App() {
  const [showSideDrawer ,setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = ()=>{
    setShowSideDrawer(false)
}
  const sideDrawerToggleHandler = ()=>{

  setShowSideDrawer(!showSideDrawer);
  }

  return (
      <React.Fragment>
         <Router>
            <Toolbar 
                
                drawerToggleClicked ={sideDrawerToggleHandler}/>
              <SideDrawer 
              
                closed = {sideDrawerClosedHandler} 
                open ={showSideDrawer}/>
            <main>
            
                  <Routes>
                    <Route path="/" element = {<Main/>}/>
                    <Route path="/weather" element = {<CurrentWeather/>}/>
                  </Routes>
              
            </main>
          </Router>

      </React.Fragment>

    // </ThemeProvider>

  );
}

export default App;
