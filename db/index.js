const conn = require('./conn');
const Product = require('./Product');
const Player = require('./Player')



// Player.hasMany(Pokemon);

// const syncAndSeed = ()=> {
//   return conn.sync({ force: true })
//     .then(()=> require('./seed')());
// };


module.exports = {
  // syncAndSeed,
  models: {
    Product,
    Player
  }
};

