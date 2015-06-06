/* @flow weak */

"use strict";

var React = require('react')
  , Body = require('./../Body')
  , EventItem = require('./EventItem')
  , styles = {}

styles.add = {
	zIndex: 1,
	position: 'absolute',
	right: '1em',
	bottom: '1em',
	backgroundColor: 'green',
	width: '3em',
	height: '3em',
	fontSize: '2em'
}

var EventsList = React.createClass({

	render: function() {
		return (
			<Body>
				<div>
					<a style={styles.add} href="/event/add">+</a>
					<div>Events List</div>

					<EventItem />
				</div>
			</Body>
		);
	}

});

module.exports = EventsList;