var MENU_KEY = 'menuOpen';
Session.setDefault(MENU_KEY, false);

var USER_MENU_KEY = 'userMenuOpen';
Session.setDefault(USER_MENU_KEY, false);

var SHOW_CONNECTION_ISSUE_KEY = 'showConnectionIssue';
Session.setDefault(SHOW_CONNECTION_ISSUE_KEY, false);

var CONNECTION_ISSUE_TIMEOUT = 5000;

Meteor.startup(function(){
    $(document.body).touchwipe({
        wipeLeft: function() {
            Session.set(MENU_KEY, false);
        },
        wipeRight: function() {
            Session.set(MENU_KEY, true);
        },
        preventDefaultEvents: false
    });

    setTimeout(function() {
        dataReadyHold.release();

        Session.set(SHOW_CONNECTION_ISSUE_KEY, true);
    }, CONNECTION_ISSUE_TIMEOUT);
});

Template.appBody.onRendered(function() {
    this.find('#content-container')._uihooks = {
        insertElement: function(node, next) {
            $(node)
                .hide()
                .insertBefore(next)
                .fadeIn(function() {
                    playersFadeInHold.release();
                });
        },

        removeElement: function(node) {
            $(node).fadeOut(function(){
                $(this).remove();
            });
        }
    };
});

Template.appBody.helpers({
    thisArray: function() {
        return [this];
    },

    gamesList: function() {
        return Games.find();
    },

    gamePlayersCount : function() {
        return Games.findOne({_id: this._id}).players.length;
    },

    connected: function() {
        if (Session.get(SHOW_CONNECTION_ISSUE_KEY)) {
            return Meteor.status().connected;
        } else {
            return true;
        }
    }
});


