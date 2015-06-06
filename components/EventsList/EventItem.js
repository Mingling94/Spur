/* @flow weak */

"use strict";

var React = require('react')
  , styles = {}

styles.title = {
  fontSize: '1.5em'

}

styles.time = {

}

styles.distance = {

}

styles.attendees = {

}

var Add = React.createClass({

  render: function() {
    return (
      <a href="/event/view">
        <div style={styles.title}>
          Event 1
        </div>
        <div style={styles.time}>
          2 mins from now
        </div>
        <div style={styles.distance}>
          3 miles away
        </div>
        <div style={styles.attendees}>
          4 attendees
        </div>
      </a>
    );
  }

});

module.exports = Add;
