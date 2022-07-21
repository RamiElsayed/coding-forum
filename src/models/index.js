const Thread = require('./Thread');
const User = require('./User');
const Comment = require('./Comment');

Thread.belongsTo(User,
  {
    foreignKey: 'user_id',
  });

User.hasMany(Thread,{
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Comment.hasOne(User,{
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

module.exports = {
  Thread,
  User,
  Comment,
};
