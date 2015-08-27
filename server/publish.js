Meteor.publish('gamesList', function(){
    return Games.find();
});

Meteor.publish('players', function(gameId){
    check(gameId, String);

    return Players.find({gameId: gameId});
})