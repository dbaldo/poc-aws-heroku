var AWS = require('aws-sdk');
var s3 = new AWS.S3();

var CloudStorage = function() { 
    this.myBucket = 'my.unique.bucket.name';
    this.myKey = 'myBucketKey';
};

CloudStorage.prototype.uploadText = function(obj) { 
         
    params = {Bucket: this.myBucket, Key: this.myKey, Body: obj};
    
    s3.putObject(params, function(err, data) {
         if (err) {
             console.log(err);
         } else {
             console.log("Dados enviados com sucesso para myBucket/myKey");
         }
      });
}

module.exports = CloudStorage;