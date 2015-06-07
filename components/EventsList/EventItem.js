/* @flow weak */

"use strict";

var React = require('react')
  , Link = require('react-router').Link

var styles = {
  event: {
    padding:24,
    borderBottom:'1px solid #eee',
    width:'100%',
    display:'block',
    textDecoration:'none',
    color:'#444'
  },
  title: {
    fontSize: '1.4em'
  },
  time: {

  },
  distance: {

  },
  attendees: {

  }
}

var Add = React.createClass({
  render: function() {
    var params = { id:this.props.event.id.objectId }
    return (
      <Link to="/event/view/:id" params={params} style={styles.event}>
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
