var imageStore = new FS.Store.GridFS("images", {
    maxTries: 2
});

/*var imageStore = new FS.Store.FileSystem("images", {
    path: "~/public/img", //optional, default is "/cfs/files" path within app container
    maxTries: 2 //optional, default 5
});*/

Images = new FS.Collection("images", {
    stores: [imageStore]
});