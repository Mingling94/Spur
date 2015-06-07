var Parse = require('parse').Parse

exports.requireLogin = function requireLogin() {
	return new Promise(function(resolve, reject) {
		var user = Parse.User.current();

		if(user) return resolve(user);

		Parse.FacebookUtils.logIn(null, {
			success: resolve,
			error: function(user, error) {
				reject(error)
			}
		});
	})
}