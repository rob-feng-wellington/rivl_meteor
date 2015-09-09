Template.join.onCreated(function(){
    this.data.fileObject = null;
});

Template.join.events({
    'submit form': function(ev) {

        var templateInstance = Template.instance(), player = {}, gamePlayer = {};
        ev.preventDefault();
        Images.insert(templateInstance.data.fileObject, function (err, fileObj) {
            if(err) {
                toastr.error(err.message);
            }
            else {
                player.name = templateInstance.$('#playerName').val();
                player.avatar = fileObj._id;

                Players.insert(player, function(err, playerId){
                    if (err) {
                        toastr.error(err.message);
                    } else {
                        gamePlayer.game_id = Router.current().params._id;
                        gamePlayer.player_id = playerId;
                        gamePlayer.score = 1500;
                        GamePlayers.insert(gamePlayer);
                    }
                });
            }
        });
    },

    'change #avatarInputFile': function(ev) {
        var files = ev.target.files;
        Template.instance().data.fileObject = files[0];
    }
})