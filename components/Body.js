/* @flow weak */

"use strict";

var React = require('react')
  , styles = {}

var Body = React.createClass({
	render: function() {
		return (
			<div className="page">
				{this.props.children}
			</div>
		);
	}

});

module.exports = Body;