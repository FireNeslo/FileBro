'use strict';

angular.module('FileBroWSApp')
  .factory('plugins', function ($http, $rootScope,filesystem) {
    var plugins = {};
    window.filebro.Plugin = function(name, init) {
        this.name = name;
        this.init = function() {
            init({filesystem: filesystem, plugins: plugins});
        }
        plugins[name] = this;
    }
    $http.get("/plugins.json").then(function(data) {
        var pluginlist = data.data;
        angular.forEach(pluginlist, function(pluginentry) {
            $.getScript("/plugins/"+pluginentry.file, function(data) {
                $rootScope.$apply(function(){
                    plugins[pluginentry.name].init();
                });
            })
        })
    });
    // Public API here
    return {
      plugins: function () {
        return plugins;
      }
    };
  });
