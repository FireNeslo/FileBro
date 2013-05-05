'use strict';

angular.module('FileBroWSApp')
  .directive('file', function (settings) {
    return {
      templateUrl: '/views/'+settings.theme+'/file.html',
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
            }
        });
      }
    };
  });