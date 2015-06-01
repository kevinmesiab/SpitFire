
/*
    Provides access to the local mysql database
    Exports:
    
    LocalList.query(sql, callback);
      
*/
var mysql       = require('mysql');
var config      = require('config');
var spitfire    = require('../lib/spitfire');

var LocalList = function() { 
    
    var pool = mysql.createPool(config.get('db.list'));
    
    
    /*
        
        getRandom()
        
        Queries for a random set of emails.  If no parameters are supplied, 10k
        emails are returned.
        
        params:
            @count The number of emails to return in the set
            @callback The function to receive the response
        
        args: 
            @sql A valid mysql sql statement to execute against the unscrubbed table 
            @callback A function to receive any errors or the response to the query.
        
    */
    this.getRandom = function() {
        
        var args        = arguments;
        var callback    = spitfire.getcb(args); 
        var count       = config.get('db.random.count');
         
        if( args && args.length > 0 ) {
            
            count  = parseInt(args[0]) ? args[0] : count;
        }
        
        var sql  = 'select r1.id, firstname, lastname, email from unscrubbed as r1 join (select ceil(rand() * (select max(id) from unscrubbed)) as id) as r2 where r1.id >= r2.id ';
            sql += 'limit ' + count + ';';
        
            this.query(sql, function(err, rows, fields ) {
                
                if( err ) throw err;
                
                if( callback ) {
                    callback( rows, fields );
                }
            });
    };
        
    
    
    /*
        
        query()
        
        Executes a sql statement against the 'unscrubbed' table
        
        args: 
            @sql A valid mysql sql statement to execute against the unscrubbed table 
            @callback A function to receive any errors or the response to the query.
        
    */
    this.query = function( sql, callback ) {
        
        if( !pool ) throw 'Could not create database pool';
        if( !sql )  throw 'No valid sql supplied';
        
        /*
            Get a db connection from the connection pool.  We will
            release it back to the pool immediately after the query.
        */
        pool.getConnection(function(err, connection) {
          
            if( err ) throw err;
            
            /*
                Query the connection
            */
            connection.query(sql, function(err, rows, fields) {
            
                connection.release();
                
                /*
                    
                    If there is a callback supplied, 
                    give it back the arguments, 
                    
                */
                if( spitfire.iscb(callback) ) {
                    callback( err, rows, fields );
                    return;
                }
                
                /*
                    
                    if not, check for an error and
                    throw it if it exists.
                    
                */
                if( err ) throw err;
            
            });
            
        });
    };
    
};

module.exports = new LocalList();