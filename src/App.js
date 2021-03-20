import './App.css';
import Home from './Components/Home/Home';
import Header from './Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LogIn from './Components/LogIn/LogIn';
import Destination from './Components/Destination/Destination';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
export const UserContext=createContext() ;
function App() {
  const [loggedInUser,setLoggedInUser]= useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <div className="App background">
        <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/destination">
            <Destination></Destination>
          </PrivateRoute>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
        </Switch>
      </div>
    </Router>
    
    </UserContext.Provider>
  );
}

export default App;
