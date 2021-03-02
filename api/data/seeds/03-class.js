exports.seed = function(knex) {
  
  return knex('class').insert([
    {
      name: 'pure yoga',
      instructor_name: 'yogi',
      type: 'yoga',
      intensity: 'high',
      date: "2021/03/23",
      start_time:"8:00",
      location: 'vegas',
      max_size: 22,
      duration: 1.0,
      number_attendees: 1,
      punch_pass:"true"
    },
    {
      name: 'meditation',
      instructor_name: 'verbena',
      type: 'medetation',
      intensity: 'low',
      date: "2021/03/27",
      start_time:"9:00",
      location: 'london',
      max_size: 12,
      duration: 2.0,
      number_attendees: 2,
      punch_pass:"false"
    },
    {
      name: 'cardio running',
      instructor_name: 'bolt',
      type: 'cardio',
      intensity: 'medium',
      date: "2021/03/28",
      start_time:"19:00",
      location: 'japan',
      max_size: 21,
      duration: 1.0,
      number_attendees: 10,
      punch_pass:"true"
    }
  ]);
};
