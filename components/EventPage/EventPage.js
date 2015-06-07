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
  		event:{
        attributes: {}
      }
  	}
  },
  componentDidMount: function() {
  	var self = this
  	EventModel.findEventById(this.getParams().id).then(function(event) {
  		self.setState({ event: event })
  	})
  },
  joinEvent: function(e) {
    console.log(this.state.event)
    EventModel.addUserToEvent(this.state.event).then(function(result, e) {
      if (e) {
        console.log("ERROR " + e)
      } else {
        console.log("ASFDJHASDFJHADSKJ")
      }
    })
  },
  render: function() {
    return (
      <Body>
      	<a href="/">Events List</a>

        <div style={styles.title}>
          {this.state.event.attributes.title}
        </div>

        <div style={styles.description}>
          {this.state.event.attributes.description}
        </div>

        <div style={styles.time}>
          {this.state.event.attributes.timestamp}
        </div>

        <div style={styles.location}>
          {this.state.event.attributes.address}
        </div>

        <div style={styles.attendees}>
          {this.state.event.attributes.attendees}
        </div>

        <button className="join" onClick={this.joinEvent}>
          Join
        </button>
      </Body>
    );
  }

});

module.exports = Event;
