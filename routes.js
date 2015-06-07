/* @flow weak */

"use strict";

var React = require('react');
var Route = require('react-router').Route;
var NotFoundRoute = require('react-router').NotFoundRoute;
var DefaultRoute = require('react-router').DefaultRoute;
var Redirect = require('react-router').Redirect;
var Parse = require('parse').Parse;
var root = typeof window != 'undefined' ? window : global;

Parse.initialize("lcOvAIMCzFeJKPCOIF4L6IBPQmthkJwShAemMUQ8", "ANHhHgubc9myfbRngBoQQvpFLQdYkw8rsNmKyItN");

Parse.FacebookUtils.init({
    appId      : '1455687261396384', 
    status     : true, 
    cookie     : true,
	version    : 'v2.3'
});

var Routes = (
  <Route handler={require('./components/App')}>
    <DefaultRoute name="Home" handler={require('./components/EventsList/EventsList')}/>
    <Route name="Create" path="/event/create" handler={require('./components/CreateEvent/CreateEvent')}/>
    <Route name="View" path="/event/view" handler={require('./components/EventPage/Event')}/>

    <Route name="About Me" path="/about" handler={require('./components/About')}/>
    <Redirect from="foo" to="About Me"/>
    <NotFoundRoute handler={require('./components/NotFound')}/>
  </Route>
);

module.exports = Routes;
