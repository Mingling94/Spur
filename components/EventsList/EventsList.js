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

var styles = {
	create: {
		zIndex: 1,
		position: 'absolute',
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
		return (
			<Body>
				<UI.AppBar title="Moments" showMenuIconButton={false} />
				{this.data.events.map(function(event) {
					return <EventItem event={event} />
				})}
				<UI.FloatingActionButton onClick={this.addEvent} style={styles.create}>
					<span style={styles.icon}>+</span>
				</UI.FloatingActionButton>
			</Body>
		)
	}

})

module.exports = EventsList
