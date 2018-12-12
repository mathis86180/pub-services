const pubService = require('./services/pubs.service');
console.log('xxxx', pubService.getListPubs());

module.exports = {
services: {
  pubService : pubService
  }
}
