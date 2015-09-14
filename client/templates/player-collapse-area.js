Meteor.subscribe('allPlayers');

Template.playerCollapseArea.helpers({
    allPlayers: function(){
        return Players.find({});
    },

    avatatImage: function(){
        return Images.findOne(this.avatar);
    }
});

Template.playerCollapseArea.events({
    'click .thumbnail': function(ev) {

        var playerId = $(ev.currentTarget).data('id');
        var gameId = Router.current().params._id;
        var playerName = $(ev.currentTarget).data('playerName');

        var player = Players.findOne({_id: playerId});

        var gamePlayer = {};
        gamePlayer.player = player;
        gamePlayer.score = 50;

        Games.update(
            {_id : gameId },
            { $addToSet: {players: gamePlayer} },
            {validate: false}
        );

        toastr.success(playerName + ' joined game');
    }
});