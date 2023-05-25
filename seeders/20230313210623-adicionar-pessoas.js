'use strict';

 /**@type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('pessoas', [
        {nome: 'Mateus',sobrenome:'Batista',idade: '30'},
        {nome: 'Eduardo',sobrenome:'Silva',idade: '26'},
        {nome: 'Tiago',sobrenome:'Pereira',idade: '9'},
        {nome: 'Pedro',sobrenome:'Rocha',idade: '18'},
        {nome: 'Carlos',sobrenome:'Costa',idade: '51'},
        {nome: 'Bruna',sobrenome:'Almeida',idade: '58'},
        {nome: 'Sara',sobrenome:'Roberta',idade: '27'},
        {nome: 'Maria',sobrenome:'Lurdes',idade: '40'}
    ], {});
  },
 
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pessoas', null, {});
 }
};

