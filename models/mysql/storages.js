const { sequelize } = require('../../config/mysql');
const { DataTypes } = require('sequelize');

const Storage = sequelize.define("Storages", {
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      filename: {
        type: DataTypes.STRING,
      }
    },
    {
      timestamps: true,
      freezeTableName: true
    }
  );

  module.exports = Storage;