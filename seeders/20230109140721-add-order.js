'use strict';

const models = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const benihanaRestaurant = await models.Restaurant.findAll({
      attributes: ['id'],
      where: {
        name: "Benihana"
      }
    });

    const benihanaId = benihanaRestaurant[0].dataValues.id;

    const devUser = await models.User.findAll({
      attributes: ['id'],
      where: {
        username: "dev"
      }
    });
    
    const devUserId = devUser[0].dataValues.id;

    await queryInterface.bulkInsert('Orders', [
      {
        userId: devUserId,
        restaurantId: benihanaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
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
