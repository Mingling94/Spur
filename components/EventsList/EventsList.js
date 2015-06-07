/* @flow weak */

"use strict";

var React = require('react')
  , Body = require('./../Body')
  , EventItem = require('./EventItem')
  , styles = {}
  , EventModel = require('../../models/events')
  , ParseReact = require('parse-react')

styles.create = {
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
	mixins: [ParseReact.Mixin],
	observe: function() {
		var a = EventModel.findEventsWithinN([40.7127837, -74.00594130000002], 1433627757, 5)
		console.log(a)
		return {
			events: a
		}
	},
	render: function() {
		return (
			<Body>
				<div>
					<a style={styles.create} href="/event/create">+</a>
					<div>Events List</div>
					{this.data.events.map(function(event) {
						return <EventItem event={event} />
					})}
				</div>
			</Body>
		)
	}

})

module.exports = EventsList
