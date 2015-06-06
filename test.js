var Parse = require('parse').Parse;

Parse.initialize("lcOvAIMCzFeJKPCOIF4L6IBPQmthkJwShAemMUQ8", "ANHhHgubc9myfbRngBoQQvpFLQdYkw8rsNmKyItN");

var events = require('./models').events;

console.log(events.createEvent({'id': 1}, {
  'title': 'test', 
  'description': 'test test', 
  'timestamp': 1433627757,
  'location': [40.7127837, -74.00594130000002]}))

events.findEventsWithinN([40.7127837, -74.00594130000002], 1433627757, 5).find().then(console.log, console.log);
