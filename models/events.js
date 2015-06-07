const EVENT_CLASS_NAME = 'SpurEvent';

var Parse = require('parse').Parse;
var Mutation = require('parse-react').Mutation;
var Q = Parse.Query;
var Event = exports.Event = Parse.Object.extend(EVENT_CLASS_NAME);

/*
 * data = {
 *   'title': 'some thing',
 *   'description': 'some description',
 *   'timestamp': long,
 *   'localtion': array of two floats
 * }
 */
exports.createEvent = function(user, data, options) {
  var locations = [
    [42.358506, -71.060142],
    [42.387657, -71.099495],
    [42.372698, -71.109658],
    [42.33672228, -71.03227615],
    [42.37186154, -71.11673355],
    [42.3421784, -71.16239548]
  ];
  var loc = locations[Math.floor(Math.random()*locations.length)];
  data.owner_id = user.id.objectId;
  data.location = new Parse.GeoPoint({latitude: loc[0], longitude: loc[1]});
  data.attendees = 0;
  var e = new Event();
  e.save(data);
  return e.save();
};

exports.findEventById = function(event_id, options) {
  var query = new Q(Event);
  return query.get(event_id, options);
};

exports.addUserToEvent = function(currentEvent) {
  return currentEvent.save();
};

exports.removeUserFromEvent = function(currentEvent) {
  return currentEvent.save();
};

exports.findEventsForOwner = function(user) {
  var query = new Q(Event);
  return query.equalTo("owner_id", user.id.objectId);
};

exports.findEventsWithinN = function(currentPosition, timestamp, miles) {
  var query = new Q(Event);
  return query.withinMiles('location', currentPosition, miles)
    .greaterThanOrEqualTo('timestamp', timestamp)
    .ascending('timestamp');
};

exports.searchEventsByString = function(needle) {
  var query = new Q(Event);
  return query.contains('title', needle.toLowerCase());
};
