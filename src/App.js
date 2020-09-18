import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import Booking from './components/Booking/Booking';
import BookingDetails from './components/BookingDetails/BookingDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DeveloperSleeping from './components/DeveloperSleeping/DeveloperSleeping';

export const SelectPlaceContext = createContext([]);

function App() {
  const [selectedPlace, setSelectedPlace] = useState([])
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <SelectPlaceContext.Provider value={[selectedPlace, setSelectedPlace, loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/bookingdetails">
            <BookingDetails />
          </Route>
          <Route path={"/news" | "/destination" | "/blog" | "/contact"}>
            <DeveloperSleeping />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </SelectPlaceContext.Provider>
  );
}

export default App;
