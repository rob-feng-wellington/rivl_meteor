Meteor.publish('games', function(){
    return Games.find({});
});

Meteor.publishComposite('playersForGame', function(gameId){
    check(gameId, String);
    return {
        find: function() {
            return Games.find({_id:gameId}).players;
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