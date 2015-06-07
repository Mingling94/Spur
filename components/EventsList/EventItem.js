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
    var url = '/event/view/'+this.props.event.id.objectId
    return (
      <a href={url}>
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
      </a>
    );
  }

});

module.exports = Add;
