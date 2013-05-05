'use strict';

angular.module('FileBroWSApp')
    .directive('directory', function ($q,$timeout,settings,filesystem) {
        return {
            templateUrl: '/views/'+settings.theme+'/directory.html',
            restrict: 'E',
            scope: {
                dir: '='
            },
            link: function postLink(scope, element, attrs) {
                var $addressBar = $("#address-bar");
                $addressBar.keydown(function(event) {
                    if(event.keyCode == 9) {

                        event.preventDefault();
                        var dir =  scope.dir;
                        var search = dir.path.split("/");
                        search = search[search.length-1].toLowerCase();
                        for(var i = 0; i < dir.list.length; i++) {
                            if(dir.list[i].name.substring(0, search.length).toLowerCase() === search) {
                                scope.open(dir.list[i]);
                            }
                        }
                    }
                });
                var isUpdating = false;
                scope.$watch("dir.path", function (d, old) {
                    if(d[d.length-1] == "/") {
                        filesystem.cd(d).then(function (dir) {
                            scope.dir = dir;
                        });
                    }
                });
                filesystem.home().then(function (dir) {
                    scope.dir = dir;
                });
                scope.open = function (entry) {
                    if (entry.isDir) {
                        filesystem.cd(entry.path).then(function (dir) {
                            scope.dir = dir;
                        });
                    } else {
                        filesystem.openFile(entry).then(function(entry) {
                            scope.preview = entry;
                        });
                    }
                };
            }
        };
    });