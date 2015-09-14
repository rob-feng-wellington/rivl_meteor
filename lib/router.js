Router.configure({
    layoutTemplate: 'appBody',
    notFoundTemplate: 'appNotFound',
    loadingTemplate: 'appLoading',

    waitOn: function() {
        return [
            Meteor.subscribe('games')
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

            //this.playersListandle = Meteor.subscribe('aGame', this.params._id);

            if(this.ready()){
                dataReadyHold.release();
            }
            this.next();
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


