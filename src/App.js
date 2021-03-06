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
import useLocalStorageState from 'use-local-storage-state/dist';

export const SelectPlaceContext = createContext([]);

function App() {
  const [selectedPlace, setSelectedPlace] = useLocalStorageState('placeName', [])
  const [loggedInUser, setLoggedInUser] = useLocalStorageState('userInfo', [{
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    error: '',
  }])

  return (
    <SelectPlaceContext.Provider value={[selectedPlace, setSelectedPlace, loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <PrivateRoute path="/bookingdetails">
            <BookingDetails />
          </PrivateRoute>
          <Route exact path="/news">
            <DeveloperSleeping />
          </Route>
          <Route exact path="/destination">
            <DeveloperSleeping />
          </Route>
          <Route exact path="/blog">
            <DeveloperSleeping />
          </Route>
          <Route exact path="/contact">
            <DeveloperSleeping />
          </Route>
          <Route exact path="/">
            <Home />
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
