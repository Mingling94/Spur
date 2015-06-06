/* @flow weak */

"use strict";

var React = require('react');
var Route = require('react-router').Route;
var NotFoundRoute = require('react-router').NotFoundRoute;
var DefaultRoute = require('react-router').DefaultRoute;
var Redirect = require('react-router').Redirect;
var Parse = require('parse').Parse;

Parse.initialize("lcOvAIMCzFeJKPCOIF4L6IBPQmthkJwShAemMUQ8", "ANHhHgubc9myfbRngBoQQvpFLQdYkw8rsNmKyItN");



var Routes = (
  <Route handler={require('./components/App')}>
    <DefaultRoute name="Home" handler={require('./components/EventsList')}/>
    <Route name="Add" path="/add" handler={require('./components/Add')}/>

    <Route name="About Me" path="/about" handler={require('./components/About')}/>
    <Redirect from="foo" to="About Me"/>
    <NotFoundRoute handler={require('./components/NotFound')}/>
  </Route>
);

module.exports = Routes;
