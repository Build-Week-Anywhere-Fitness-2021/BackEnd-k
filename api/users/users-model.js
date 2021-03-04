const db = require('../data/db-config');

module.exports = {
  addUser,
  getUsers,
  findBy,
  getClass,
  //addClassToClient,
  getClientClasses,
  getUserById,
  findClassesBy,
  getClassType,
  //deleteSavedClass,
  getClassById, 
  addFavorite,
  getFavoriteClass,
  updateClass,
  removeClass
};

async function addUser(user) {
  const [id] = await db('user').insert(user, 'userId')
  return getUserById(id) //********************************** check this */
}

function getUserById(id) {
  return db('user as u')
    .select('u.userId', 'u.username', 'u.email', 'u.role')
    .where('u.userId', id)
    .first()
}

function getUsers() {
  return db('user');
}

function findBy(filter) {
  return db('user')
    .where(filter);
}

function getClass() {
  return db.select('*').from('class');
}

function getClassById(classId) {
  return db('class as c')
  .select('c.name', 
  'c.instructor', 
  'c.type', 
  'c.intensityLevel',
  'c.date',
  'c.startTime',
  'c.location',
  'c.maxRegistered',
  'c.duration',
  'c.registered')
  .where('c.classId',classId)
  .first()
}

function findClassesBy(filter) {
  return db("class").where(filter);
}

function getClassType(type) {
  return db('class').where(type)
};

function getClientClasses({user_id}) {
  return db('user_classes')
    .join('user', 'user.id', 'user_classes.user_id')
    .where('user.id', `${user_id}`);
};

function addFavorite(user_id, class_id) {
  return db('user_classes')
    .insert({user_id, class_id})
    .then(() => {
      return getClientClasses(user_id);
    });
}

function getFavoriteClass(id) {
  return db.select('*').from('user_classes').where({user_id:id})

}

function updateClass(id, changes) {
  return db('class as c')
    .where('c.classId', id).update(changes);
}

function removeClass(id) {
  return db('user_classes')
    .where({class_id:id}).del();
}