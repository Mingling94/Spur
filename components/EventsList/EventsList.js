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
	width: '2em',
	height: '2em',
	borderRadius: '2em',
	fontSize: '2em',
	textAlign: 'center',
	verticalAlign: 'middle',
	textDecoration: 'none',
	color: 'white',
	padding: '0.5em',
	lineHeight: 0.9
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