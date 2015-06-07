/* @flow weak */

"use strict";

var React = require('react')
  , Body = require('./../Body')
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
  render: function() {

	console.log(this)

    return (
      <Body>
      	<a href="/">Events List</a>

        <div style={styles.title}>
          Event Title
        </div>

        <div style={styles.description}>
          This is longer text for the Event Description
        </div>

        <div style={styles.time}>
          7:48pm
        </div>

        <div style={styles.location}>
          342 Tree Way, Atlanta GA
        </div>

        <div style={styles.attendees}>
          List of Attendees: Ryan Britton, Sean Reid...
        </div>

        
      </Body>
    );
  }

});

module.exports = Event;
