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

    await queryInterface.bulkInsert('Food', [
      {
        name: 'Sushi',
        createdAt: new Date(),
        updatedAt: new Date(),
        restaurantId: benihanaId
      },
      {
        name: 'Pui Curry',
        createdAt: new Date(),
        updatedAt: new Date(),
        restaurantId: benihanaId
      },
      {
        name: 'Wagyu Beef',
        createdAt: new Date(),
        updatedAt: new Date(),
        restaurantId: benihanaId
      },
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
