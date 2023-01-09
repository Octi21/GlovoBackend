'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Restaurant.hasMany(models.Food);

      models.Restaurant.belongsToMany(models.User, {
        foreignKey: 'restaurantId', 
        through: models.Order,
        as: 'users' 
      });
    }
  }
  Restaurant.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};