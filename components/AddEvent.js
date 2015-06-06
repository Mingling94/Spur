/* @flow weak */

"use strict";

var React = require('react')
  , Body = require('./Body')

var Add = React.createClass({

  render: function() {
    return (
      <div>
        <Body>
          <a href="/">Events List</a>
          Add
        </Body>
      </div>
    );
  }

});

module.exports = Add;
