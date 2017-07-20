var AWS = require('aws-sdk');
var s3 = new AWS.S3();

var CloudStorage = function() { 
    this.myBucket = 'poc-aws-datalake-s3';
};

CloudStorage.prototype.uploadText = function(key, obj) { 
         
    params = {Bucket: this.myBucket, Key: key, Body: obj};
    
    s3.putObject(params, function(err, data) {
         if (err) {
             console.log(err);
         } else {
             console.log("Dados enviados com sucesso para myBucket/myKey");
         }
      });

};

module.exports = CloudStorage;