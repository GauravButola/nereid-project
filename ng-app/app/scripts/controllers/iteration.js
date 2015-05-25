'use strict';

angular.module('nereidProjectApp')
.controller('IterationCtrl', [
    '$scope',
    '$state',
    'Iteration',
    'Helper',
    'Task',
    function($scope, $state, Iteration, Helper, Task) {
      $scope.progressStates = Task.progressStates;

      $scope.loadIteration = function() {
        Iteration.get($state.params.iterationId)
          .success(function(result) {
            $scope.iteration = result;
          })
          .error(function(reason) {
            Helper.showDialog('Could not fetch iteration.', reason);
          });
      };

    }
  ]);
