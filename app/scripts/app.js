'use strict';

window.filebro = angular.module('FileBroWSApp', ["ui", "ui.bootstrap.tabs", "ui.ace"])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
window.filebro.events = {};
/**
 * namespace filebro
 * @name filebro.action
 * @function action
 * @param {object} data contains event specific data
 **/
/**
 * @namespace filebro
 * @name filebro.registerEventListener
 * @param {string} event String to specify what event the plugin handles
 * @param {object} data object to pass data or options to the plugin.
 * @param {function} filebro.action your plugin
 **/
window.filebro.registerEventListener = function(event, data, action) {
    window.filebro.events[event](data, action);
};
window.filebro.events.openFile = function(data, action) {
    var listeners = window.filebro.events.openFile.listeners;
    window.filebro.events.openFile.listeners = listeners || [];
    window.filebro.events.openFile.listeners.push({
        type: data.type,
        template: data.template,
        templateUrl: data.templateUrl,
        action : action
    });
}