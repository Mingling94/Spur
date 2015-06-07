/* @flow weak */

"use strict";

var React = require('react')
  , Body = require('./../Body')

var Create = React.createClass({
  render: function() {
    return (
      <div>
        <Body>
          <a href="/">Events List</a>
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
    this.setState({location: e.target.value});
  },
  updateTimeField: function(e) {
    this.setState({time: e.target.value});
  },
  handleSubmit: function(e) {
    console.log(e.target)
    e.preventDefault();
  },
  getInitialState: function() {
    return {}
  }
});

module.exports = Create;
