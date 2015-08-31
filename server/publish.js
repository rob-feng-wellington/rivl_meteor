Meteor.publish('games', function(){
    return Games.find();
});

Meteor.publish('games_players', function(gameId){
    check(gameId, String);

    return GamePlayers.find({gameId: gameId})
});

Meteor.publish('players', function(playersList){

    return Players.find({_id: {$in: playersList}});
})