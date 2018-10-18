const path = require('path');

module.exports = {
    test: {
        username: process.env.TEST_DB_USERNAME,
        password: process.env.TEST_DB_PASSWORD,
        database: process.env.TEST_DB_NAME,
        host: process.env.TEST_DB_HOSTNAME,
        dialect: 'sqlite',
        storage: ':memory:',
        operatorsAliases: false
      }
}