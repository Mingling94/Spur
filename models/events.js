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
  var event
  var loc = data.location;
  data.owner_id = user.id;
  data.location = new Parse.GeoPoint({latitude: loc[0], longitude: loc[1]
});

  return Mutation.Create(EVENT_CLASS_NAME, data).dispatch(options);
};

exports.findEventById = function(event_id, options) {
  var query = new Q(Event);
  return query.get(event_id, options);
};

exports.addUserToEvent = function(currentEvent, user) {
  return Mutation.AddUnique(currentEvent, "attendees", user).dispatch();
};

exports.removeUserFromEvent = function(currentEvent, user) {
  return Mutation.Remove(currentEvent, "attendees", user).dispatch();
};

exports.findEventsForOwner = function(user) {
  var query = new Q(Event);
  return query.equalTo("owner_id", user.id);
};

exports.findEventsWithinN = function(currentPosition, timestamp, miles) {
  console.log("yay")
  var query = new Q(Event);
  return query.withinMiles('location', currentPosition, miles)
    .greaterThanOrEqualTo('timestamp', timestamp)
    .ascending('timestamp');
};

exports.searchEventsByString = function(needle) {
  var query = new Q(Event);
  return query.contains('title', needle.toLowerCase());
};
