/* @flow weak */

"use strict";

var React = require('react')
  , UI = require('material-ui')

var styles = {
	header: {
		position:'fixed'
	},
	page: {
		marginTop:64
	}
}

var Body = React.createClass({
	render: function() {
		return (
			<div className="page">
				<UI.AppBar title={this.props.title} showMenuIconButton={false} style={styles.header} />
				<div style={styles.page}>
					{this.props.children}
				</div>
			</div>
		);
	}

});

module.exports = Body;