/* @flow weak */

"use strict";

var React = require('react')
  , Body = require('./../Body')
  , Router = require('react-router')
  , EventModel = require('../../models/events')
  , UI = require('material-ui')
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
      },
      join: {
        text:'Join',
        className:'join'
      }
  	}
  },
  componentDidMount: function() {
  	var self = this
  	EventModel.findEventById(this.getParams().id).then(function(event) {
      self.setState({ event: event })
  	})
  },
  toggleJoin: function(e) {
    var event = this.state.event
    var attendees = event.attributes.attendees;

    if(this.state.join.className == 'bail') {
      if(!event.attributes.attendees) event.attributes.attendees = 1
      attendees = attendees-1
      this.setState({ join: { text:'Join', className:'join' }, event:event })
    } else {
      attendees = attendees + 1
      this.setState({ join: { text:'Bail', className:'bail' }, event:event })
    }
    event.set("attendees", attendees)
    event.save()
  },
  render: function() {
    return (
      <Body>
      	<UI.AppBar title={this.state.event.title} />

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

        <button className={this.state.join.className} onClick={this.toggleJoin}>
          {this.state.join.text}
        </button>
      </Body>
    );
  }

});

module.exports = Event;
