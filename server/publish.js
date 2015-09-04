Meteor.publishComposite('games', {
    find: function() {
        return Games.find({});
    },

    children: [
        {
            find: function(game) {
                return GamePlayers.find(
                    {game_id: game._id}
                )
            }
        }
    ]
});

Meteor.publish('game_players', function(gameId){
    check(gameId, String);

    return GamePlayers.find({game_id: gameId})
});

Meteor.publish('players', function(playersList){

    return Players.find({_id: {$in: playersList}});
})