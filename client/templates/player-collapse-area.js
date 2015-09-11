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
        var gamePlayer = {};
        gamePlayer.player = $(ev.currentTarget).data('id');
        gamePlayer.game = Router.current().params._id;
        var playerName = $(ev.currentTarget).data('playerName');

        // todo: fix this!!
        Meteor.call();
        gamePlayer._id = GamePlayers.insert(gamePlayer);
        toastr.success('joined game');
    }
});