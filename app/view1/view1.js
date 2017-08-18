'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])


.controller('View1Ctrl', function($http, $scope) {

  $http.get('view1/data.json').then(function(data) {
    $scope.project = data;

    Highcharts.chart('container', {
      chart: {
        width: '500'
      },

      title: {
        text: 'Velocity'
      },

      yAxis: {
        title: {
          text: 'Points Completed'
        }
      },

      xAxis: {
        categories: ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4', 'Sprint 5', 'Sprint 6',
          'Sprint 7', 'Sprint 8', 'Sprint 9', 'Sprint 10', 'Sprint 11', 'Sprint 12']
      },

      series: [{
        name: 'Salesforce',
        data: [25, 20, 22, 24, 19, 27, 30, 28, 28, 35, 30, 32]
      }]
    });

    //container 2
    Highcharts.chart('container2', {
      chart: {
        width: '500'
      },

      title: {
        text: 'Productivity'
      },

      yAxis: {
        title: {
          text: 'Points Completed'
        }
      },

      xAxis: {
        categories: ['August 1', 'August 2', 'August 3', 'August 4', 'August 5', 'August 6',
          'August 7', 'August 8', 'August 9', 'August 10', 'August 11', 'August 12']
      },

      series: [{
        name: 'Salesforce',
        data: [25, 20, 22, 24, 19, 27, 30, 28, 28, 35, 30, 32]
      }]
    });

    //container 3
    Highcharts.chart('container3', {
      chart: {
        width: '500'
      },

      title: {
        text: 'Capacity'
      },

      yAxis: {
        title: {
          text: 'Points Remaining'
        }
      },

      xAxis: {
        title: {
          text: 'Capacity Remaining'
        },
        categories: ['August 1', 'August 2', 'August 3', 'August 4', 'August 5', 'August 6',
          'August 7', 'August 8', 'August 9', 'August 10', 'August 11', 'August 12']
      },

      series: [{
        name: 'Salesforce',
        data: [25, 20, 22, 24, 19, 27, 30, 28, 28, 35, 30, 32]
      }]
    });

    //container 4
    Highcharts.chart('container4', {
      chart: {
        width: '500'
      },

      title: {
        text: 'Scope Volatility'
      },

      yAxis: {
        title: {
          text: 'Scope at Post Start of Iteration'
        }
      },

      xAxis: {
        title: {
          text: 'Scope at Start of Iteration'
        },
        categories: ['August 1', 'August 2', 'August 3', 'August 4', 'August 5', 'August 6',
          'August 7', 'August 8', 'August 9', 'August 10', 'August 11', 'August 12']
      },

      series: [{
        name: 'Salesforce',
        data: [25, 20, 22, 24, 19, 27, 30, 28, 28, 35, 30, 32]
      }]
    });
  });

});