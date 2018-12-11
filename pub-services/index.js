var pubService = require('./services/pubs.service');

console.log('xxxx', pubService.listPubs());

module.exports = {
services: {
  pubService : pubService
  }
}
