/* @flow weak */

"use strict";

var React = require('react')
  , Body = require('./../Body')

var title = {

}

var description = {

}

var time = {

}

var location = {

}

var attendees = {

}

var Event = React.createClass({

  render: function() {
    return (
      <Body>
      	<a href="/">Events List</a>

        <div style={title}>
          Event Title
        </div>

        <div style={description}>
          This is longer text for the Event Description
        </div>

        <div style={time}>
          7:48pm
        </div>

        <div style={location}>
          342 Tree Way, Atlanta GA
        </div>

        <div style={attendees}>
          List of Attendees: Ryan Britton, Sean Reid...
        </div>

        
      </Body>
    );
  }

});

module.exports = Event;
