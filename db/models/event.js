"use strict";
const { Model, DataTypes } = require("sequelize");
const { sequelize } = require(".");

// id = username + md5(title+dateStart)

module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    static associate(models) {
      Events.belongsTo(models.users, {
        foreignKey: "user_id",
        as: "owner",
      });
    }
  }

  Events.init({
      id: {
        type: DataTypes.STRING(64),
        unique: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      dateStart: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      dateEnd: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: "events",
    });
};
