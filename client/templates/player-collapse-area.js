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

        // todo: fix this!!
        Meteor.call('createGamePlayer', gameId, playerId, function(error, result){
            if (error) {
                console.log(error);
            } else {
                console.log(result);
            }
        });
        toastr.success('joined game');
    }
});