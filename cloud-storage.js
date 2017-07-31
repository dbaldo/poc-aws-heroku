var AWS = require('aws-sdk');
var s3 = new AWS.S3();

var CloudStorage = function() { 
    this.myBucket = process.env.S3_BUCKET;
};

CloudStorage.prototype.uploadText = function(key, obj, callback) { 
        
    key = 'producao/mensagens/' + key;
    params = {Bucket: this.myBucket, Key: key, Body: obj};
    
    s3.putObject(params, function(err, data) {
         if (err) {            
             console.log(err);
             callback(key, true);
         } else {
             console.log("Dados enviados com sucesso para poc-aws-datalake-s3/" + key);
             callback(key, false);
         }
      });

};

module.exports = CloudStorage;