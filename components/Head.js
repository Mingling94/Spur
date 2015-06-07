/* @flow weak */

"use strict";

// The head component ONLY gets rendered server-side
var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

var Head = React.createClass({

  displayName: 'Head',

  mixins: [PureRenderMixin],

  render: function() {
    return (
      <head>
        <meta charSet="utf-8" />
        <title>{this.props.title}</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <link href='/static/normalize.css' rel='stylesheet' />
        // Including the Google Maps API and the GMaps library
        // <script src="http://maps.google.com/maps/api/js?sensor=true"></script>
        // <script src="http://cdnjs.cloudflare.com/ajax/libs/gmaps.js/0.4.12/gmaps.min.js"></script> GEO
      </head>
    );
  }
});

module.exports = Head;
