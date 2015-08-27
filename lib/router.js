Router.configure({
    layoutTemplate: 'appBody',
    notFoundTemplate: 'appNotFound',
    loadingTemplate: 'appLoading',

    waitOn: function() {
        return [
            Meteor.subscribe('gameLists')
        ];
    }
});

dataReadyHold = null;

if (Meteor.isClient) {
    // Keep showing the launch screen on mobile devices until we have loaded
    // the app's data
    dataReadyHold = LaunchScreen.hold();

    Router.onBeforeAction('loading', {except: ['join']});
    Router.onBeforeAction('dataNotFound', {except: ['join']});

}

Router.map(function() {
    this.route('join');

    this.route('gamesShow', {
        path: '/games/:_id',
        onBeforeAction: function() {
            this.playersHandle = Meteor.subscribe('players', this.params._id);

            if(this.ready()){
                dataReadyHold.release();
            }
        },
        data: function() {
            return Games.findOne(this.params._id);
        },
        action: function() {
            this.render();
        }
    });

    this.route('home', {
        path: '/',
        action: function() {
            Router.go('gamesShow', Games.findOne() );
        }
    });
});


