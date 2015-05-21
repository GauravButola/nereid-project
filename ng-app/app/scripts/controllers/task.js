'use strict';

angular.module('nereidProjectApp')
.controller('TaskCtrl', [
    '$scope',
    '$state',
    'Task',
    'Helper',
    function($scope, $state, Task, Helper) {

      $scope.taskId = $state.params.taskId;
      $scope.projectId = $state.params.projectId;

      $scope.commentObj = {};

      $scope.states = Task.states;

      $scope.loadTask = function() {
        Task.get($scope.projectId, $scope.taskId)
          .success(function(result) {
            $scope.task = result;
          })
          .error(function(reason) {
            Helper.showDialog('Could not fetch task', reason);
          });
      };

      $scope.submitComment = function() {
        Task.addComment($scope.taskId, $scope.commentObj)
          .success(function(result) {
            $scope.task.comments.push(result.comment);
            $scope.commentObj = {};
          })
          .error(function(reason) {
            Helper.showDialog('Could not add comment', reason);
          });
      };

    }
  ]);