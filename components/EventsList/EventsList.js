/* @flow weak */

"use strict";

var React = require('react')
  , Body = require('./../Body')
  , EventItem = require('./EventItem')

var EventsList = React.createClass({

	render: function() {
		return (
			<Body>
				<div>
					<a href="/event/add">+</a>
					<div>Events List</div>

					<EventItem />
				</div>
			</Body>
		);
	}

});

module.exports = EventsList;