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
    ]);

    const users = await models.User.findAll();
    const addresses = await models.Address.findAll();

    for(let i = 0; i < users.length; i++) {
      const addressId = addresses[Math.floor(Math.random() * addresses.length)].id;
      await queryInterface.bulkUpdate('Users', {
        addressId: addressId,
      }, {
        id: users[i].id,
      });
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
