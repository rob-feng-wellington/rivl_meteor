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


})