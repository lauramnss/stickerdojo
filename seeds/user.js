const users = require('../Users')
exports.seed = function(knex, Promise) {
 
  return knex('users').del()
    .then(function () {
      return knex('users').insert(users);
    });
};
module.exports = router