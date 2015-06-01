
var db = require('./lib/localdb');
 
db.getRandom(10, function(list){
    console.log( list );
    return;    
});
 
//db.query('select * from unscrubbed limit 10', function(err, rows, fields) {
  
//  if (err) throw err;

  //console.log(rows);
  //console.log( fields );
  
//});
