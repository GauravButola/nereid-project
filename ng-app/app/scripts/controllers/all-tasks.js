'use strict';

angular.module('nereidProjectApp')
.controller('AllTasksCtrl', [
    '$mdDialog',
    '$scope',
    'Project',
    'Helper',
    function($mdDialog, $scope, Project, Helper) {

      $scope.loadTasks = function(projectId) {
        Project.getTasks(projectId)
          .success(function(result) {
            $scope.tasks = result.items;
          })
          .error(function(reason) {
            Helper.showDialog('Could not fetch tasks', reason);
          });
      };

    }
  ]);
