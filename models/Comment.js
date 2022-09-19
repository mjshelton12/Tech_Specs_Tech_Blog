const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Content extends Model {}

Content.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    contents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

module.exports = Comment;
