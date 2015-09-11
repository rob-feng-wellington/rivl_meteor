Meteor.subscribe('allPlayers');

Template.playerCollapseArea.helpers({
    allPlayers: function(){
        return Players.find({});
    },

    avatatImage: function(){
        return Images.findOne(this.avatar);
    }
});