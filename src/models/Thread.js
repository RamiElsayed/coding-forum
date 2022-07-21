const { Model, DataTypes } = require('sequelize');

const connection = require('../config/connection');

class Thread extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    len: [8 - 30],
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
    len: [50, 1000],
  },
  date_created: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'user',
      key: 'id',
    },
  },
};

const options = {
  sequelize: connection,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'thread',
};

Thread.init(schema, options);

module.exports = Thread;
