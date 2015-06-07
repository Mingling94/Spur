/* @flow weak */

"use strict";

var React = require('react')
  , Router = require('react-router')
  , Body = require('./../Body')
  , EventAPI = require('./../../models/events')
  , Moment = require('moment')
  , UI = require('material-ui')
  // , GMaps = require('react-gmaps') GEO

var styles = {
  label: {
    display:'block',
    textTransform: 'uppercase',
    fontSize:11,
    color:'#444'
  },
  input: {
    padding:12,
    marginBottom:24,
    width:'100%'
  },
  form: {
    padding:24
  },
  action: {
    float:'right',
    marginLeft:12
  }
}

var Create = React.createClass({
	mixins: [Router.Navigation],
  render: function() {
    return (
      <Body title="Create a Moment">
        <form className="createEvent" onSubmit={this.handleSubmit} style={styles.form}>
          <div>
            <label style={styles.label}>
              Event Name
            </label>
            <input type="text" name="name" value={this.state.name}
              onChange={this.updateNameField} style={styles.input} />
          </div>
          <div>
            <label style={styles.label}>
              Location
            </label>
            <input type="text" name="location" value={this.state.location}
              onChange={this.updateLocationField} style={styles.input} />
          </div>
          <div>
            <label style={styles.label}>
              Time
            </label>
            <input type="time" name="time" value={this.state.time}
              onChange={this.updateTimeField} style={styles.input} />
          </div>
          <div>
            <label style={styles.label}>
              Description
            </label>
            <textarea onChange={this.updateDescriptionField} style={styles.input}>{this.state.description}</textarea>
          </div>
          <UI.RaisedButton label="Create" primary={true} style={styles.action} />
          <UI.RaisedButton label="Cancel" style={styles.action} onClick={this.goBack} />
        </form>
      </Body>
    );
  },
  updateNameField: function(e) {
    this.setState({name: e.target.value});
  },
  updateLocationField: function(e) {
    var self = this
    // keep track of this, because it changes
    // GMaps.geocode({
    //   address: e.target.value,
    //   callback: function(results, status) {
    //     if (status != 'OK') return
    //     var geo = results[0].geometry.location
    //     self.setState({
    //       coordinates: [geo.lat(), geo.lng()]
    //     })
    //     console.log(self.coordinates)
    //   }
    // }) GEO
    this.setState({location: e.target.value});
  },
  updateTimeField: function(e) {
    this.setState({time: e.target.value});
  },
  updateDescriptionField: function(e) {
    this.setState({description: e.target.description});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var options = {
      title: this.state.name,
      address: this.state.location,
      timestamp: Moment().add(1, 'day').unix()
    }
    console.log(options)
    EventAPI.createEvent({id: {objectId: 0}}, options)
    //this.transitionTo('/')
    this.goHome()
  },
	goHome: function() {
		this.transitionTo('/')
	},
  getInitialState: function() {
    return {}
  }
});

module.exports = Create;
