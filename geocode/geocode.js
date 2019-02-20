const request = require('request');

var geoocdeAddress  = function(address, callback){
    var encodedaddress = encodeURIComponent(address);

    request({
        url:`https://www.mapquestapi.com/geocoding/v1/address?key=UwDh8iNBAApN6aF5wHSs2twivZpTwhKI&inFormat=kvp&outFormat=json&location=${encodedaddress}&thumbMaps=false`,
        json: true
    }, function(error,response, body){
        if(error){
            callback('Unable to connect');
            //console.log('Unable to connect');
        }
        else if(body.info.statuscode!=0){
            callback('Unable to find the desired location');
            //console.log('Unable to find the desired location');
        }
        else{
            callback(undefined, {
                address:body.results[0].locations[0].street,
                latitude:body.results[0].locations[0].latLng.lat,
                longitude:body.results[0].locations[0].latLng.lng
            });
            /*var street = body.results[0].locations[0].street;
            var latitude = body.results[0].locations[0].latLng.lat;
            var longitude = body.results[0].locations[0].latLng.lng;
            console.log(`Address ${street}`);
            console.log(`Latitude ${latitude}`);
            console.log(`Longitude ${longitude}`);*/
        }
    });
};

module.exports = {
    geoocdeAddress
};