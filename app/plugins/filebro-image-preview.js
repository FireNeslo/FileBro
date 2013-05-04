(function(Plugin) {
	new Plugin("filebro-image-preview", function(context){
        console.log("init: filebro-image-preview");
		filebro.registerEventListener("openFile", {type: "image"}, function(file) {
            return {
               template : "/views/mime-image.html",
               file : file,
            };
		});
	});
})(filebro.Plugin)
