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
        </Body>
      </div>
    );
  }

});

module.exports = Create;
