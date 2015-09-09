var Schemas = {};



Schemas.Game = new SimpleSchema({
    title: {
        type: String,
        label: "Title"
    },
    createdAt: {
        type: Date,
        label: "Created at",
        defaultValue: new Date
    }
});

Schemas.Player = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    createdAt: {
        type: Date,
        label: "Created at",
        defaultValue: new Date
    },
    avatar: {
        type: String,
        optional: true
    }
});

Schemas.GamePlayer = new SimpleSchema({
    game:{
        type: Schemas.Game
    },
    player:{
        type: [Schemas.Player],
        minCount: 1
    },
    score: {
        type: Number,
        defaultValue: 50
    }
});


Games = new Mongo.Collection('games');
Games.attachSchema(Schemas.Game);

Players = new Mongo.Collection('players');
Players.attachSchema(Schemas.Player);

GamePlayers = new Mongo.Collection('game_players');
GamePlayers.attachSchema(Schemas.GamePlayer);
