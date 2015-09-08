// Track if this is the first time the list template is rendered
var firstRender = true,
    playersRenderHold = LaunchScreen.hold();

playersFadeInHold = null;

Template.gamesShow.onRendered(function(){
    if(firstRender) {
        // Released in app-body.js
        playersFadeInHold = LaunchScreen.hold();
        // Handle for launch screen defined in app-body.js
        playersRenderHold.release();

        firstRender = false;
    }

    /*this.find('.js-title-nav')._uihooks = {
        insertElement: function(node, next) {
            $(node)
                .hide()
                .insertBefore(next)
                .fadeIn();
        },
        removeElement: function(node) {
            $(node).fadeOut(function() {
                this.remove();
            });
        }
    };*/
});

Template.gamesShow.helpers({
    playerListReady: function() {
        return Router.current().playersListandle.ready();
    },

    players: function() {
        return GamePlayers.find({game_id: Router.current().params._id});
    }
});