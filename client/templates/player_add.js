Template.playerAdd.onCreated(function(){
    this.data.fileObject = null;
});

Template.playerAdd.events({
    'submit form': function(ev) {
        ev.preventDefault();
        console.log(Template.instance().data.fileObject);
        Images.insert(Template.instance().data.fileObject, function (err, fileObj) {
            debugger;
        });
    },

    'change #avatarInputFile': function(ev) {
        var files = ev.target.files;
        Template.instance().data.fileObject = files[0];
    }
})