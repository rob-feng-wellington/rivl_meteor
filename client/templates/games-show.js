// Track if this is the first time the list template is rendered
var firstRender = true,
    playersRenderHold = LaunchScreen.hold();

playersFadeInHold = null;

var SHOW_ADD_PLAYER_KEY = 'showForm';
Session.setDefault(SHOW_ADD_PLAYER_KEY, false);

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
    },

    addPlayerFormOpen: function() {
        return Session.get(SHOW_ADD_PLAYER_KEY);
    },

    hasOneOrMorePlayers: function() {
        return GamePlayers.find({game_id: Router.current().params._id}).count > 0;
    }
});

Template.gamesShow.events({
    'click .AddPlayerToGame': function(event) {
        event.preventDefault();
        Session.set(SHOW_ADD_PLAYER_KEY, true);
    }
})