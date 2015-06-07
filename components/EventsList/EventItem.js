/* @flow weak */

"use strict";

var React = require('react')
  , Link = require('react-router').Link
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
    var params = { id:this.props.event.id.objectId }
    return (
      <Link to="/event/view/:id" params={params}>
        <div style={styles.title}>
          {this.props.event.title}
        </div>

        <div style={styles.time}>
          {this.props.event.timestamp}
        </div>
        <div style={styles.distance}>
          {this.props.event.location}
        </div>
        <div style={styles.attendees}>
          4 attendees
        </div>
      </Link>
    );
  }

});

module.exports = Add;
