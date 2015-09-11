playersFadeInHold = null;

Template.join.onRendered(function(){
    playersFadeInHold = LaunchScreen.hold();
});

Template.join.onCreated(function(){
    this.data.fileObject = null;
});

Template.join.events({
    'submit form': function(ev) {

        var templateInstance = Template.instance(), player = {};
        ev.preventDefault();
        Images.insert(templateInstance.data.fileObject, function (err, fileObj) {
            if(err) {
                toastr.error(err.message);
            }
            else {
                player.name = templateInstance.$('input[name="name"]').val();
                player.avatar = fileObj._id;
                console.dir(player);

                player._id = Players.insert(player);
                toastr.success('new player joined');
            }
        });
    },

    'change #avatarInputFile': function(ev) {
        var files = ev.target.files;
        Template.instance().data.fileObject = files[0];
    }
})