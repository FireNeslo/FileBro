(function(Plugin) {
	new Plugin("filebro-image-preview", function(context){
        console.log("plugin: filebro-image-preview");
		filebro.registerEventListener("openFile", {type: "image"}, function(file) {
            return {
               template : "/views/mime-image.html",
               file : file,
            };
		});
	});
})(filebro.Plugin)
