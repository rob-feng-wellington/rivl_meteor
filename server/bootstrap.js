// if the database is empty on server start, create some sample data.
Meteor.startup(function() {

    if(Games.find().count() === 0 || Players.find().count() === 0 || GamePlayers.find().count() === 0) {
        var games = [
            {
                name: "Table tennis",
                players: [
                    "Rob",
                    "Liam",
                    "Jonathan",
                    "Dmitri",
                    "Paul",
                    "Rowan",
                    "Vlad"
                ]
            },
            {
                name: "Foosball",
                players: [
                    "Liam",
                    "Dean",
                    "Dave",
                    "Jonathan"
                ]
            }
        ];

        var players = [
            {
                name: "Liam"
            },
            {
                name: "Rob"
            },
            {
                name: "Jonathan"
            },
            {
                name: "Dmitri"
            },
            {
                name: "Paul"
            },
            {
                name: "Rowan"
            },
            {
                name: "Vlad"
            },
            {
                name: "Dean"
            },
            {
                name: "Dave"
            }

        ];

        var defaultScore = 1500;

        var timestamp = (new Date()).getTime();

        // do players first
        _.each(players, function(player){
            Players.insert({
                name: player.name,
                avatar: "",
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
                var player = Players.find({name:player});
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

