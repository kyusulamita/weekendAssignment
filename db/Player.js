const conn = require('./conn');
const { Sequelize } = conn;

const Player = conn.define('player', {
  name: Sequelize.STRING
  }, {
  defaultScope: {
    attributes: ['name', 'id'],
  }
});

module.exports = Player;
