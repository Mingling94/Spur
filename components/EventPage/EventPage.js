/* @flow weak */

"use strict";

var React = require('react')
  , Body = require('./../Body')
  , Router = require('react-router')
  , EventModel = require('../../models/events')
  , UI = require('material-ui')
  , moment = require('moment')


var styles = {
  infoBar: {
    padding: 24,
    backgroundColor:'#f4f4f4',
    borderBottom:'1px solid #ddd'
  },
  info: {
    display:'inline-block',
    marginRight: 24
  },
  icon: {
    marginRight: 3,
    position:'relative',
    top:6
  },
  action: {
    margin:24,
    marginTop:0,
    float:'right',
    color:'#fff'
  },
  address: {
    marginTop:12
  },
  description: {
    padding:24
  }
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
    var event = this.state.event.attributes

    return (
      <Body title={event.title}>
        <div style={styles.infoBar}>
          <div style={styles.info}>
            <UI.FontIcon className="material-icons" style={styles.icon}>face</UI.FontIcon>
            <span>{event.attendees} going</span>
          </div>
          <div style={styles.info}>
            <UI.FontIcon className="material-icons" style={styles.icon}>access_time</UI.FontIcon>
            {moment.unix(event.timestamp).calendar()}
          </div>
          <div style={{ ...styles.info, ...styles.address }}>
            <UI.FontIcon className="material-icons" style={styles.icon}>location_on</UI.FontIcon>
            {event.address}
          </div>
        </div>
        <div style={styles.description}>
          {event.description}
        </div>
        <UI.RaisedButton style={styles.action} className={this.state.join.className} primary={true} onClick={this.toggleJoin}>
          {this.state.join.text}
        </UI.RaisedButton>
      </Body>
    );
  }

});

module.exports = Event;
