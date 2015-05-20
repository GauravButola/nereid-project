'use strict';

angular.module('nereidProjectApp')
.controller('ProjectsCtrl', [
    '$mdDialog',
    '$scope',
    'Project',
    function($mdDialog, $scope, Project) {

      $scope.loadProjects = function() {
        console.log('hello');
        Project.getAll()
          .success(function(result) {
            $scope.projects = result;
            console.log(result);
          })
          .error(function(reason) {
            $mdDialog.alert()
            .title('Could not fetch projects')
            .content(reason)
            .ariaLabel('Could not fetch projects')
            .ok('Got it!');
          });
      };

    }
  ]);
