
/*
    Sees if a variable is referencing a function
*/
exports.iscb = function(callback) {
    return callback && typeof callback == 'function';
}

/*
    Searches an array for a function.
    
    Otherwise returns false.  
*/
exports.getcb = function( args ) {
     
    if( !args || args.length == 0 ) {
        return false;
    }
    
    for (var i = 0, len = args.length; i < len; i++) {
       
      if( exports.iscb( args[i] ) ) {
        
          return args[i];
      }
      
    }
    
    return false;
    
}
