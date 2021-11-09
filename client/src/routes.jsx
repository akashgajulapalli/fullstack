import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Home from "./components/home/home";
import Profile from './components/profile/profile';
import Update from './components/update details/update';

const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home}/>
        <Route path="/profile" component={Profile} />
        <Route path="/update" component={Update} />
      </Switch>
    </BrowserRouter>
  );
};

export default RouteComponent;
