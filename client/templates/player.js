Template.player.helpers({
    playerData: function() {
        return Players.findOne({_id:this.player_id});
    }
});