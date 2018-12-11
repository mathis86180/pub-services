var pubs = require('../mock/pubs.json');
var fs = require('fs');

function listPubs(){
  return pubs;
}

/*
creer la methode en fonction des jours d'ouverture
*/

module.exports = {
  listPubs: listPubs
}
