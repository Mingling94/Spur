/* @flow weak */

"use strict";

var React = require('react')
  , Link = require('react-router').Link
  , UI = require('material-ui')
  , moment = require('moment')

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
  info: {
    display:'inline-block',
    marginRight: 24
  },
  icon: {
    marginRight: 3,
    position:'relative',
    top:6
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

        <div style={styles.info}>
          <UI.FontIcon className="material-icons" style={styles.icon}>access_time</UI.FontIcon>
          {moment.unix(this.props.event.timestamp).fromNow()}
        </div>
        <div style={styles.info}>
          <UI.FontIcon className="material-icons" style={styles.icon}>location_on</UI.FontIcon>
          3.1 miles
        </div>
        <div style={styles.info}>
          <UI.FontIcon className="material-icons" style={styles.icon}>face</UI.FontIcon>
          <span>{this.props.event.attendees} going</span>
        </div>
      </Link>
    );
  }

});

module.exports = Add;
