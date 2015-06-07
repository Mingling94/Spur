/* @flow weak */

"use strict";

var React = require('react');
var Title = require('react-document-title');
var RouteHandler = require('react-router').RouteHandler;
var UI = require('material-ui');
var ThemeManager = new UI.Styles.ThemeManager();
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');

var App = React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},
	getChildContext: function() { 
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	},
	render: function() {
		var name = this.context.router.getCurrentPath();
		return (
			<Title title='My App'>
				<TransitionGroup component="div" transitionName="page">
					<RouteHandler key={name} />
				</TransitionGroup>
			</Title>
		);
	}
});

module.exports = App;
