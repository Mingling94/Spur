/* @flow weak */

"use strict";

var React = require('react');
var Title = require('react-document-title');
var RouteHandler = require('react-router').RouteHandler;
var UI = require('material-ui');
var ThemeManager = new UI.Styles.ThemeManager();

var App = React.createClass({
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},
	getChildContext: function() { 
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	},
	render: function() {
		return (
			<Title title='My App'>
				<RouteHandler />
			</Title>
		);
	}
});

module.exports = App;
