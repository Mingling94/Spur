/* @flow weak */

"use strict";

var React = require('react')
  , Router = require('react-router')
  , Body = require('./../Body')
  , EventItem = require('./EventItem')
  , EventModel = require('../../models/events')
  , UserModel = require('../../models/user')
  , ParseReact = require('parse-react')
  , UI = require('material-ui')
  , Moment = require('moment')
  , Geolib = require('geolib')

var styles = {
	create: {
		zIndex: 1,
		position: 'fixed',
		right: '1em',
		bottom: '1em'
	},
	icon: {
		fontSize: '2em',
		color: 'white'
	}
}
						
var EventsList = React.createClass({
	mixins: [ParseReact.Mixin, Router.Navigation],
	observe: function() {
		return {
			events: EventModel.findEventsWithinN([42.3600825, -71.0588801], Moment().unix(), 10)
		}
	},
	getInitialState: function() {
		return {}
	},
	addEvent: function() {
		this.transitionTo('/event/create')
	},
	render: function() {
		var distances = {}
		for(var i=0; i<this.data.events.length; i++) {
			var event = this.data.events[i]
			var location = this.data.events[i].location
			distances[event.id] = Geolib.getDistance({latitude: location.latitude, longitude: location.longitude}, 
															  {latitude: 42.3600825, longitude: -71.0588801})
			distances[event.id] = Math.round((distances[event.id]/1609.43)*10)/10
		}



		return (
			<Body title="Moments">
				{this.data.events.map(function(event) {
					return <EventItem event={event} distances={distances} />
				})}
				<UI.FloatingActionButton onClick={this.addEvent} style={styles.create}>
					<span style={styles.icon}>+</span>
				</UI.FloatingActionButton>
			</Body>
		)
	}

})

module.exports = EventsList
