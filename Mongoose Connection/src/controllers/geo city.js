var NodeGeocoder = require('node-geocoder');

var options = {
  provider: 'google',
  httpAdapter: 'https', // Default
  apiKey: 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=76&longitude=34&localityLanguage=en', // for Mapquest, OpenCage, Google Premier
  formatter: 'json' // 'gpx', 'string', ...
};

var geocoder = NodeGeocoder(options);

geocoder.reverse({lat:28.5967439, lon:77.3285038}, function(err, res) {
  console.log(res);
}); 

console.log('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=37.42159&longitude=-122.0837&localityLanguage=en', GET)