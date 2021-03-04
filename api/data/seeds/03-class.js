exports.seed = function(knex) {
  
  return knex('class').insert([
    {
      name: 'pure yoga',
      instructor: 'yogi',
      type: 'yoga',
      intensityLevel: 'high',
      date: "2021/03/23",
      startTime:"8:00",
      location: 'vegas',
      maxRegistered: 22,
      duration: 1.0,
      registered: 1,
      punch_pass:"true"
    },
    {
      name: 'meditation',
      instructor: 'verbena',
      type: 'medetation',
      intensityLevel: 'low',
      date: "2021/03/27",
      startTime:"9:00",
      location: 'london',
      maxRegistered: 12,
      duration: 2.0,
      registered: 2,
      punch_pass:"false"
    },
    {
      name: 'cardio running',
      instructor: 'bolt',
      type: 'cardio',
      intensityLevel: 'medium',
      date: "2021/03/28",
      startTime:"19:00",
      location: 'japan',
      maxRegistered: 21,
      duration: 1.0,
      registered: 10,
      punch_pass:"true"
    }
  ]);
};
