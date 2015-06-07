/* @flow weak */

"use strict";

var React = require('react')
  , Body = require('./../Body')
  , EventAPI = require('./../../models/events')
  // , GMaps = require('react-gmaps') GEO

var Create = React.createClass({
  render: function() {
    return (
      <div>
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
      </div>
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
    this.setState({time: e.target.description});
  },
  handleSubmit: function(e) {
    var options = {
      name: this.state.name,
      location: this.state.location,
      time: this.state.time
    }
    EventAPI.createEvent("UserDefault", options)
    e.preventDefault();
  },
  getInitialState: function() {
    return {}
  }
});

module.exports = Create;
