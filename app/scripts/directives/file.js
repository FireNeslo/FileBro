'use strict';

angular.module('FileBroWSApp')
  .directive('file', function () {
    return {
      template: '<div class="well preview" ng-show="show"><center><h1>{{file.type}}: {{file.name}} <button class="pull-right" ng-click="show=false">Close</button></h1></center><ng-include src="template"></ng-include></div>',
      restrict: 'E',
      scope: {
         entry: "="
      },
      link: function postLink(scope, element, attrs) {
        scope.$watch('entry', function(entry) {
            if(entry) {
                for(var data in entry) {
                    scope[data] = entry[data];
                }
                scope.show = true;
                console.log("scope: ",scope);
            }
        });
      }
    };
  });