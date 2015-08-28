Meteor.publish('gamesList', function(){
    return Games.find();
});

Meteor.publish('playersList', function(gameId){
    check(gameId, String);

    return GamePlayers.find({gameId: gameId})
});

Meteor.publish('players', function(playersList){

    return Players.find({_id: {$in: playersList}});
})