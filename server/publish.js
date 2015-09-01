Meteor.publish('games', function(){
    return Games.find();
});

Meteor.publish('game_players', function(gameId){
    check(gameId, String);

    return GamePlayers.find({game_id: gameId})
});

Meteor.publish('players', function(playersList){

    return Players.find({_id: {$in: playersList}});
})