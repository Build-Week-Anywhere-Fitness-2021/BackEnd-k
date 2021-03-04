const db = require('../data/db-config');

module.exports = {
  addClass,
  updateClass,
  removeClass,
  getClassById,
  getClass, 
  getUsers
};

async function addClass(data) {
  const [id] = await db('class').insert(data, 'classId');
    return  getClassById(id);
}

function getClass() {
  return db.select('*').from('class');
}

function getUsers() {
  return db.select('*').from('user');
}

function updateClass(id, changes) {
  return db('class as c')
    .where('c.classId', id)
    .update(changes);
}

// function removeClass(id) {
//   return db('class')
//     .where({id}).delete();
// }


function removeClass(classid) {
  return db("class").where("classId", classid).del();
}

function getClassById(id) {
  return db('class as c')
    .select('*')
    .where('c.classId', id)
    .first();
}