Meteor.publish('games', function(){
    return Games.find({});
});

Meteor.publishComposite('getGameDetails', function(gameId){
    check(gameId, String);
    return {
        find: function() {
            return Games.findOne({_id:gameId});
        },

        children: [
            {
                find: function(gamePlayer) {
                    return Players.find({
                        _id: gamePlayer.player._id
                    })
                }
            }
        ]
    }
});

/*Meteor.publishComposite('game_players',
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
);*/

Meteor.publish('playerList', function(gameId){
    check(gameId, String);
    var game = Games.findOne({_id: gameId});
    if(game) {
        var gameIds = _.map(game.players, function(player){
            return player._id
        });
        return Players.find({_id: {$in: gameIds}});
    }

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