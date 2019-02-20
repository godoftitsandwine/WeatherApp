const request = require('request');

var getWeather = function(latitude, longitude, callback){
    request({
        url: `https://api.darksky.net/forecast/62a915d4f83e2fb34e182f7cf411ccc0/${latitude},${longitude}`,
        json:true
    },function(error, response, body){
        if(error){
            callback(error);
        }else if(response.statusCode === 400){
            callback('Unable to fetch weather');
        }else if(response.statusCode === 200){
            callback(undefined, {
                temperature:body.currently.temperature,
                apparentTemperature:body.currently.apparentTemperature
            });
        }
    });
};

module.exports = {
    getWeather
};