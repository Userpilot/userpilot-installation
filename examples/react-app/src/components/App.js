import React from "react";
import { BrowserRouter, Route, Switch, Redirect, useLocation } from "react-router-dom";
// components
import Layout from "./Layout";
// pages
import Error from "../pages/error";
import Login from "../pages/login";
// context
import { useUserState } from "../context/UserContext";
import {Userpilot} from 'userpilot';

export default function App() {
  // global
  var { isAuthenticated } = useUserState();

  const location = useLocation();


  React.useEffect(() => {
    if(isAuthenticated){
      console.info('[Userpilot] Userpilot.identify()');
      console.warn('[Userpilot] Replace {userId} with the logged in user identifier');

      Userpilot.identify('456987',{
        name: 'John Doe',
        email: 'john@site-domain.com',
        created_at: '2018-07-11',
      });
    }
  }, [isAuthenticated]);


  React.useEffect(() => {
    if(isAuthenticated){
      console.info('[Userpilot] Call Userpilot.reload() on page changes');
      console.warn('[Userpilot] If you want to trigger experiences on anonymous users, call `Userpilot.reload()` on every page change');
      Userpilot.reload();
    }
  }, [location])

  return (
    
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/dashboard" />}
        />
        <PrivateRoute path="/app" component={Layout} />
        <PublicRoute path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
