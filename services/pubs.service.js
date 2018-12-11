var file = require('./pubs.json');
var fs = require('fs');
function listPubs(){
  var obj = JSON.parse(fs.readFileSync(file, 'utf8'));
  var obj;
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    console.log(obj);
  });
}


module.exports = {
  listPubs: listPubs
}
