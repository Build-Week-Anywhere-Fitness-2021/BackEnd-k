exports.seed = function(knex) {
  return knex('user').insert([
    {
      username: 'qwerty1',
      email: 'qwerty@me.com',
      password: 'password1',
      role: 'instructor'
    },

    {
      username: 'admin123',
      email: 'admin@me.com',
      password: 'password1',
      role: 'instructor'
    },
    {
      username: 'test123',
      email: 'test@me.com',
      password: 'password1',
      role: 'client'
    }
  ]);
};
