const Comment = require('./Comment');
const Thread = require('./Thread');
const User = require('./User');

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Thread, {
  foreignKey: 'thread_id',
  onDelete: 'CASCADE',
});

Thread.belongsTo(User, {
  foreignKey: 'user_id',
});

Thread.hasMany(Comment, {
  foreignKey: 'thread_id',
  onDelete: 'CASCADE',
});

User.hasMany(Thread, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

module.exports = { Comment, Thread, User };
