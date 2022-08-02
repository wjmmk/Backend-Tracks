const { sequelize } = require('../../config/mysql');
const { DataTypes } = require('sequelize');

const Tracks = sequelize.define("Tracks", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      album: {
        type: DataTypes.STRING,
      },
      mediaId: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.ENUM(["user", "admin"]),
      },
    },
    {
      timestamps: true,
      freezeTableName: true
    }
  );
  

    
module.exports = Tracks;