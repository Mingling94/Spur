var Parse = require('parse').Parse;
var Q = require('parse').Parse.Query;
var Event = exports.Event = Parse.Object.extend("SpurEvent");

/*
 * options = {
 *   'title': 'some thing',
 *   'description': 'some description',
 *   'timestamp': long,
 *   'localtion': array of two floats
 * }
 */
exports.createEvent = function(user, options) {
  var e = new Event();

  var loc = options.location;
  options.owner_id = user.id;
  options.location = new Parse.GeoPoint({latitude: loc[0], longitude: loc[1]});
  e.save(options);

  return e.save();
};

exports.findEventById = function(event_id) {
  var query = new Q(Event);
  return query.get(event_id);
};

exports.addUserToEvent = function(currentEvent, user) {
  currentPosition.addUnique("attendees", user);
  return currentEvent.save();
};

exports.removeUserFromEvent = function(currentEvent, user) {
  currentEvent.remove('attendees', user);
  return currentEvent.save();
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
