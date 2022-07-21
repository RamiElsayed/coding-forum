const users = require('./users');
const threads = require('./threads');
const comments = require('./comments');
const connection = require('../config/connection');
const User = require('../models/User');
const Thread = require('../models/Thread');
const Comment = require('../models/Comment');

const seedAll = async () => {
  await connection.sync({ force: true});

  console.log('DB sync successful');

  await User.bulkCreate(users);
  console.log('Users seed successful');

  await Thread.bulkCreate(threads);
  console.log('Threads seed successful');


  await Comment.bulkCreate(comments);
  console.log('Comments seed successful');

};

seedAll();