Meteor.methods({
    createGamePlayer: function(gameId, playerId) {
        check(playerId, String);
        check(gameId, String);

        var player = Players.findOne({_id:playerId}),
            game = Games.findOne({_id:gameId});
        console.log(player);
        console.log(game);
        var gamePlayer = {};
        gamePlayer.game = game;
        gamePlayer.player = player;

        gamePlayer._id = GamePlayers.insert(gamePlayer);

        return gamePlayer;

    }
});