/* @flow weak */

"use strict";

var React = require('react')

var title = {
  fontSize: '1.5em'

}

var time = {

}

var distance = {

}

var attendees = {

}

var Add = React.createClass({

  render: function() {
    return (
      <a href="/event/view">
        <div style={title}>
          Event 1
        </div>
        <div style={time}>
          2 mins from now
        </div>
        <div style={distance}>
          3 miles away
        </div>
        <div style={attendees}>
          4 attendees
        </div>
      </a>
    );
  }

});

module.exports = Add;
