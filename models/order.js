'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Order.belongsTo(models.User, { 
        foreignKey: 'userId', 
        as: 'user' 
      });
      models.Order.belongsTo(models.Restaurant, { 
        foreignKey: 'restaurantId', 
        as: 'restaurant' 
      });

      models.Order.belongsToMany(models.Food, {
        foreignKey: 'orderId', 
        through: models.OrderList,
        as: 'food'
      });    
    }
  }
  Order.init({
    userId: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};