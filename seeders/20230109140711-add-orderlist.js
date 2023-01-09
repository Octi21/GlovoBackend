'use strict';

const models = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const devUser = await models.User.findAll({
      attributes: ['id'],
      where: {
        username: "dev"
      }
    });
    
    const devUserId = devUser[0].dataValues.id;

    const devOrder = await models.Order.findAll({
      attributes: ['id'],
      where: {
        userId: devUserId
      }
    });
    
    const devOrderId = devOrder[0].dataValues.id;

    const benihanaRestaurant = await models.Restaurant.findAll({
      attributes: ['id'],
      where: {
        name: "Benihana"
      }
    });

    const benihanaId = benihanaRestaurant[0].dataValues.id;

    const benihanaFoods = await models.Food.findAll({
      attributes: ['id'],
      where: {
        restaurantId: benihanaId
      }
    });

    for (let i = 0; i < benihanaFoods.length; i++) {
      const benihanaFoodId = benihanaFoods[i].dataValues.id;

      await queryInterface.bulkInsert('OrderLists', [
        {
          orderId: devOrderId,
          foodId: benihanaFoodId,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]);
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
