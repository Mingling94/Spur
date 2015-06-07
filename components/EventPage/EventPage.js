/* @flow weak */

"use strict";

var React = require('react')
  , Body = require('./../Body')
  , Router = require('react-router')
  , EventModel = require('../../models/events')
  , styles = {}

styles.title = {

}

styles.description = {

}

styles.time = {

}

styles.location = {

}

styles.attendees = {

}

var Event = React.createClass({
  mixins: [Router.State],
  getInitialState: function() {
  	return {
  		event:{}
  	}
  },
  componentDidMount: function() {
  	var self = this
  	EventModel.findEventById(this.getParams().id).then(function(event) {
  		self.setState({ event: event.attributes })
  	})
  },
  render: function() {

    return (
      <Body>
      	<a href="/">Events List</a>

        <div style={styles.title}>
          {this.state.event.title}
        </div>

        <div style={styles.description}>
          {this.state.event.description}
        </div>

        <div style={styles.time}>
          {this.state.event.timestamp}
        </div>

        <div style={styles.location}>
          {this.state.event.address}
        </div>

        <div style={styles.attendees}>
          {this.state.event.attendees}
        </div>

        
      </Body>
    );
  }

});

module.exports = Event;
