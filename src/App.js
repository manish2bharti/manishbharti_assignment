import React from "react";
import { Provider, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import PrivateRoute from "./components/PrivateRoute";
import ProfileScreen from "./components/ProfileScreen";
import store from "./store";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={LoginScreen} />
          <PrivateRoute
            path="/home"
            component={HomeScreen}
            isLoggedIn={isLoggedIn}
          />
          <PrivateRoute
            path="/profile/:index"
            component={ProfileScreen}
            isLoggedIn={isLoggedIn}
          />
          <Route path="/" component={LoginScreen} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
