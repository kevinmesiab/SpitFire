
var db = require('./lib/localdb');
 
db.getRandom(10, onGetRandom(list){
    console.log( list );
    process.exit(1);    
});
 
//db.query('select * from unscrubbed limit 10', function(err, rows, fields) {
  
//  if (err) throw err;

  //console.log(rows);
  //console.log( fields );
  
//});
