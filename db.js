const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: "127.0.0.1",
    port: "3307",
    user:"root",
    password: "Password123456",
    database: "users"
});

module.exports={
    getConnection: function(){
        return new Promise(function(resolve,reject){
            pool.getConnection().then(function(connection){
                resolve(connection);
            }).catch(function(error){
                reject(error);
            });
        });
    }
}