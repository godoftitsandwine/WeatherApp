console.log('Application is running.')
const request = require('request');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const yargs = require('yargs');
const argv = yargs.options({
    a:{
        demand:true,
        alias:'address',
        describe:'Address to fetch from user',
        string:true
    }
}).help().alias('help', 'h').argv;

geocode.geoocdeAddress(argv.address,function(errorMessage, results){
    if(errorMessage){
        console.log(errorMessage);
    }
    else{
        //console.log(JSON.stringify(results, undefined, 2));
        weather.getWeather(results.latitude,results.longitude,function(errorMessage, weatherResults){
            if(errorMessage){
                console.log(errorMessage);
            }
            else{
                console.log(`It's currently ${weatherResults.temperature} . Expected rise in temperature ${weatherResults.apparentTemperature}`);
            }
        });
    }
});

/*weather.getWeather(27.16,78.05,function(errorMessage, weatherResults){
    if(errorMessage){
        console.log(errorMessage);
    }
    else{
        console.log(JSON.stringify(weatherResults, undefined, 2));
    }
});*/

//https://api.darksky.net/forecast/62a915d4f83e2fb34e182f7cf411ccc0/37.8267,-122.4233