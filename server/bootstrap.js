// if the database is empty on server start, create some sample data.
Meteor.startup(function() {

    if(Games.find().count() === 0 ) {
        var games = [
            {
                title: "Table tennis"

            },
            {
                title: "Foosball"

            }
        ];

        var timeStamp = (new Date()).getTime();

        _.each(games, function(game){
            Games.insert({
                title: game.title,
                createdAt: new Date(timeStamp)
            });
            timeStamp += 1;
        });
    }
});

