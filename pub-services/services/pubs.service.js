const pubs = require('../mock/pubs.json');
const Pub = require('../classes/Pub');
const Owner = require('../classes/Owner');
const Beer = require('../classes/Beer');

function getListPubs(){
  // const arrayPubs = [];
  //
  // pubs.forEach(element => {
  //   const owner = Owner(element.owner.firstName,element['owner']['lastName'],element['owner']['mail']);
  //   const beer = new Beer(element['beer']['type'],element['beer']['name']);
  //   const pub = new Pub(element.name, owner, element.openDays, element.openHours, beer);
  //   arrayPubs.push(pub);
  // });
  //
  // return arrayPubs;

  return pubs.map(element => {
    const owner = new Owner.Owner(element.owner.firstName,element.owner.lastName,element.owner.mail);
    const beer = new Beer.Beer(element.beers.name,element.beers.type);
    const pub = new Pub.Pub(element.name, owner, element.openDays, element.openHours, beer);
    return pub;
  })
}

/*
creer la methode en fonction des jours d'ouverture
*/

module.exports = {
  getListPubs
}
