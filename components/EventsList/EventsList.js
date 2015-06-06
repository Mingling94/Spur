/* @flow weak */

"use strict";

var React = require('react')
  , Body = require('./../Body')
  , Event = require('./Event')

var EventsList = React.createClass({

	render: function() {
		return (
			<Body>
				<div>
					<a href="/add">+</a>
					<div>Events List</div>

					// Loop Over Events
					<Event />
				</div>
			</Body>
		);
	}

});

module.exports = EventsList;