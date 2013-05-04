(function(Plugin) {
	new Plugin("filebro-text-preview", function(context){
        console.log("init: filebro-text-preview");
        function textEditor (file) {
            return file.get().then(function(data) {
                return {
                    template : "/views/mime-text.html",
                    file : file,
                    data: data.data
                };
            });
        };
		filebro.registerEventListener("openFile", {type: "text"}, textEditor);
	});
})(filebro.Plugin)
