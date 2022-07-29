const Comment = require('./Comment');
const Thread = require('./Thread');
const User = require('./User');

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Thread, {
  foreignKey: 'thread_id',
});

Thread.belongsTo(User, {
  foreignKey: 'user_id',
});

Thread.hasMany(Comment, {
  foreignKey: 'thread_id',
  onDelete: 'cascade', 
  hooks:true 
});

User.hasMany(Thread, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

module.exports = { Comment, Thread, User };
