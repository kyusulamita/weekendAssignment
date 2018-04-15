const { SqlAdapter } = require('js-data-sql');

// Create an instance of SqlAdapter
// const adapter = new SqlAdapter({
//   knexOpts: {
//     client: 'mysql'
//   }
// });

const adapter = new SqlAdapter({
  knexOpts: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'test',
      password: '123456',
      database: 'weekendProject',
      port: '5432'
    }
  }
});

module.export = adapter;
