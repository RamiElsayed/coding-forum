const users = require('./users');
const threads = require('./threads');
const comments = require('./comments');
const connection = require('../config/connection');
const User = require('../models/User');
const Thread = require('../models/Thread');
const Comment = require('../models/Comment');

const seedAll = async () => {
  try {
    await connection.sync({ force: true });

    console.log('DB sync successful');

    await User.bulkCreate(users);
    const userPromises = users.map((user) => User.create(user));

    await Promise.all(userPromises);
    
    console.log('Users seed successful');

    await Thread.bulkCreate(threads);
    console.log('Threads seed successful');

    await Comment.bulkCreate(comments);
    console.log('Comments seed successful');
  } catch (error) {
    console.log(`[ERROR]: seed failed | ${error.message}`);
  }

  process.exit(0);
};

seedAll();
