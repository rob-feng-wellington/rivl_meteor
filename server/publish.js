Meteor.publishComposite('games', {
    find: function() {
        return Games.find({});
    },

    children: [
        {
            find: function(game) {
                return GamePlayers.find(
                    {game_id: game._id}
                );
            }
        }
    ]
});

Meteor.publishComposite('game_players',
    function(gameId){
        check(gameId, String);
        return{
            find: function() {
                return GamePlayers.find({game_id: gameId});
            },

            children: [
                {
                    find: function(gamePlayer) {
                        return Players.find(
                            {_id: gamePlayer.player_id}
                        );
                    }
                }
            ]
        }
    }
);

Meteor.publish('players', function(playersList){
    return Players.find({_id: {$in: playersList}});
});

Meteor.publishComposite('allPlayers', {
    find: function() {
        return Players.find({});
    },

    children: [
        {
            find: function(player) {
                return Images.find(
                    {_id: player.avatar}
                );
            }
        }
    ]
});