/* @flow weak */

"use strict";

var React = require('react')
  , Body = require('./Body')

var EventsList = React.createClass({

	render: function() {
		return (
			<Body>
				<div>
					<a href="/add">+</a>
					<div>Events List</div>
				</div>
			</Body>
		);
	}

});

module.exports = EventsList;
