import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { SelectPlaceContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [selectedPlace, setSelectedPlace, loggedInUser, setLoggedInUser] = useContext(SelectPlaceContext);
    return (
        <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email || loggedInUser.name ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;