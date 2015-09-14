Meteor.methods({
    createGamePlayer: function(gameId, playerId) {
        check(playerId, String);
        check(gameId, String);

        var player = Players.findOne({_id: playerId});

        var gamePlayer = {};
        gamePlayer.player = player;
        gamePlayer.score = 50;
        console.log()
        return Games.update(gameId ,{
            $push: {
                players: gamePlayer
            }
        });
    }
});