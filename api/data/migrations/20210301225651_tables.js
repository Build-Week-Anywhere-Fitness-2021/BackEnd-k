
exports.up = function(knex) {
    return knex.schema
    .createTable('user', tbl => {
        tbl.increments('userId');
        tbl.string('username', 128).notNullable().unique().index();
        tbl.string('email',200).notNullable().unique();
        tbl.string('password',200).notNullable();
        tbl.string('role',128).notNullable();
        tbl.bool('signedUp').defaultTo('false');
      })
  
    .createTable('class', tbl => {
        tbl.increments('classId');
        tbl.string('name',128).notNullable().unique();
        tbl.string('instructor_name',128).notNullable();
        tbl.string('type',128).notNullable();
        tbl.string('intensity',128).notNullable();
        tbl.string('date',128).notNullable();
        tbl.string('start_time',128).notNullable();
        tbl.string('location',128).notNullable();
        tbl.integer('max_size',128).notNullable();
        tbl.integer('duration',128).notNullable();
        tbl.integer('number_attendees',128).defaultTo(0);
        tbl.string('punch_pass',128).notNullable();
      })
    
    .createTable('user_classes', tbl => {
        tbl.increments();
        tbl.integer('user_id').notNullable().references('userId').inTable('user').onDelete('CASCADE').onUpdate('CASCADE');
        tbl.integer('class_id').notNullable().references('classId').inTable('class').onDelete('CASCADE').onUpdate('CASCADE');
      });
    };
    
    exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('user_classes')
      .dropTableIfExists('user')
      .dropTableIfExists('class')
    };
