/* @flow weak */

"use strict";

var React = require('react');

var EventsList = React.createClass({

	render: function() {
		return (
			<div>
				<a href="/add">+</a>
				<div>Events List</div>
			</div>
		);
	}

});

module.exports = EventsList;
