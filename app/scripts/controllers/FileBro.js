'use strict';

angular.module('FileBroWSApp')
    .controller('FileBroCtrl', function ($scope, plugins) {
        $scope.currentDir = function () {
            var dir = $scope.tabs.filter(function (pane) {
                return pane.active;
            })[0];
            return dir ? dir.dir : $scope.tabs[0].dir;
        };
        $scope.tabs = [
            { dir : {path : "Home"}}
        ];
        $scope.remove = function (tab, tabs) {
            var remove = $scope.tabs.length > 1;
            if (remove) {
                tabs.splice($scope.tabs.indexOf(tab), 1);
            }

        };
        $scope.dirUp = function(dir) {
            var newdir = dir.path.split("/");
            dir.path = newdir.splice(0,newdir.length-2).join("/")+"/";
        }
        $scope.add = function (tabs) {
            tabs.push({
                path: "/home"
            });
        }
    });