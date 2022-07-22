const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const connection = require('../config/connection');
const { hashPassword } = require('../hooks/hashPassword');

class User extends Model {
  checkPassword(password) {
    return bcrypt.compareSync(password, this.password);
  }
}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validat: {
      isAlpha: true,
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8],
    }
  },
  about_me: {
    type: DataTypes.TEXT,
    len: [50,200],
  }
};

const options = { 
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
    },
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
};

User.init(schema, options);

module.exports = User;