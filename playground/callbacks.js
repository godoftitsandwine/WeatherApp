var getUser = function(id, callback){
    var user = {
        id:31,
        name:'Pulkit'
    };
    callback(user);
};

getUser(31, function(userObj){
    console.log(userObj);
});