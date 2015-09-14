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
    },
    players: {
        type: Array
    },
    "players.$": {
        type: Object,
        blackbox: true
    },
    "players.$.player": {
        type: Schemas.Player
    },
    "players.$.score": {
        type: Number,
        defaultValue: 50
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


Games = new Mongo.Collection('games');
Games.attachSchema(Schemas.Game);

Players = new Mongo.Collection('players');
Players.attachSchema(Schemas.Player);
