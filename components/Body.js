/* @flow weak */

"use strict";

var React = require('react')

var body = {
	maxWidth: '40em',
	width: '100%',
	margin: 'auto',
	height: '100%',
	backgroundColor: '#eee'
}

var Body = React.createClass({

	render: function() {
		return (
			<div style={body}>
				{this.props.children}
			</div>
		);
	}

});

module.exports = Body;