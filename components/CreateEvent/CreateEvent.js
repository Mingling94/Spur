/* @flow weak */

"use strict";

var React = require('react')
  , Router = require('react-router')
  , Body = require('./../Body')
  , EventAPI = require('./../../models/events')
  , Moment = require('moment')
  , UI = require('material-ui')
  // , GMaps = require('react-gmaps') GEO

var Create = React.createClass({
	mixins: [Router.Navigation],
  render: function() {
    return (
      <Body>
        <a href="/">Back to List</a>
        Create
        <form className="createEvent" onSubmit={this.handleSubmit}>
          <div>
            <label>
              Event Name
            </label>
            <input type="text" name="name" value={this.state.name}
              onChange={this.updateNameField}/>
          </div>
          <div>
            <label>
              Location
            </label>
            <input type="text" name="location" value={this.state.location}
              onChange={this.updateLocationField}/>
          </div>
          <div>
            <label>
              Time
            </label>
            <input type="time" name="time" value={this.state.time}
              onChange={this.updateTimeField}/>
          </div>
          <div>
            <label>
              Description
            </label>
            <textarea onChange={this.updateDescriptionField}>{this.state.description}</textarea>
          </div>
          <button type="submit">
            Submit
          </button>
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
