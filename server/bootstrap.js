// if the database is empty on server start, create some sample data.
Meteor.startup(function() {

    if(Games.find().count() === 0 || Players.find().count() === 0 || GamePlayers.find().count() === 0) {
        var games = [
            {
                name: "Table tennis",
                players: [
                    "leopard",
                    "dachshund",
                    "frog",
                    "koala",
                    "owl",
                    "pug",
                    "cat"
                ]
            },
            {
                name: "Foosball",
                players: [
                    "devid",
                    "panda",
                    "koala",
                    "cat"
                ]
            }
        ];

        var players = [
            {
                name: "leopard",
                avatar: "leopard.png"
            },
            {
                name: "dachshund",
                avatar: "dachshund.png"
            },
            {
                name: "frog",
                avatar: "frog.png"
            },
            {
                name: "koala",
                avatar: "koala.png"
            },
            {
                name: "owl",
                avatar: "owl.png"
            },
            {
                name: "pug",
                avatar: "pug.png"
            },
            {
                name: "cat",
                avatar: "cat.png"
            },
            {
                name: "devid",
                avatar: "devid.png"
            },
            {
                name: "panda",
                avatar: "panda.png"
            }

        ];

        var defaultScore = 1500;

        var timestamp = (new Date()).getTime();

        // do players first
        _.each(players, function(player){
            Players.insert({
                name: player.name,
                avatar: player.avatar,
                createdAt: new Date(timestamp)
            });
            timestamp += 5;
        });

        _.each(games, function(game){
            var game_id = Games.insert({
                name: game.name,
                createdAt: new Date(timestamp)
            });
            _.each(game.players, function(player){
                var player = Players.findOne({name:player});
                GamePlayers.insert({
                    game_id: game_id,
                    player_id: player._id,
                    createdAt: new Date(timestamp),
                    score: defaultScore
                });
                timestamp += 5;

            });

            timestamp += 5;
        });

    }
});

