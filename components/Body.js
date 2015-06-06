/* @flow weak */

"use strict";

var React = require('react')
  , styles = {}

styles.body = {
	maxWidth: '40em',
	width: '100%',
	margin: 'auto',
	height: '100%',
	backgroundColor: '#eee',
	position: 'relative'
}

var Body = React.createClass({

	render: function() {
		return (
			<div style={styles.body}>
				{this.props.children}
			</div>
		);
	}

});

module.exports = Body;