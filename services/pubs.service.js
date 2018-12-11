var pubs = require('../mock/pubs.json');
var fs = require('fs');

function listPubs(){
  pubs.forEach(function(element) {
  console.log('pub name : ',element['name']);
});
}

/*
creer la methode en fonction des jours d'ouverture
*/

module.exports = {
  listPubs: listPubs
}
