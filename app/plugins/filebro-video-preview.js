(function(Plugin) {
	new Plugin("filebro-video-preview", function(context){
        console.log("plugin: filebro-video-preview");
        function html5Video (file) {
            return {
                template : "/views/mime-video.html",
                file : file,
            };
        };
		filebro.registerEventListener("openFile", {type: "video/mp4"}, html5Video);
        filebro.registerEventListener("openFile", {type: "video/ogg"}, html5Video);
        filebro.registerEventListener("openFile", {type: "video/webm"},html5Video);
        filebro.registerEventListener("openFile", {type: "audio/mpeg"},html5Video);
        filebro.registerEventListener("openFile", {type: "audio/ogg"}, html5Video);
	});
})(filebro.Plugin)
