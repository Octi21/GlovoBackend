'use strict';
const models = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Addresses', [
      {
        city: 'Bucuresti',
        street: 'Bd. Iuliu Maniu',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        city: 'Bucuresti',
        street: 'Bd. Unirii',
        createdAt: new Date(),
        updatedAt: new Date(),
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
