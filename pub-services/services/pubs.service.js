var pubs = require('../mock/pubs.json');
var fs = require('fs');

function listPubs(){
  var arrayPubs = [];
  pubs.forEach(function(element) {
    arrayPubs.push(element);
  });
  return arrayPubs;
}

/*
creer la methode en fonction des jours d'ouverture
*/

module.exports = {
  listPubs: listPubs
}
