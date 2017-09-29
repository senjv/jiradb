'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', function ($http, $scope) {
        $scope.activeTab = 'platform';
        var x = 0;

        $http.get('view1/data.json').then(function (data) {
            $scope.project = data;
            console.log(data.data.issues.length);
            data.data.issues.forEach(function (obj1) {
                console.log(obj1.key);
                console.log(obj1.fields.project.name);
                console.log(obj1.fields.issuetype.name);
                console.log(obj1.fields.fixVersions.name);
                console.log(obj1.fields.status.name);
                if (obj1.fields.customfield_15770) {
                    var iteration = obj1.fields.customfield_15770[0].match(/Iteration/);
                    if (iteration !== null && iteration) {
                        var matches = obj1.fields.customfield_15770[0].match(/Iteration\s(\w*)/, '');
                    }
                    if (matches) {
                        console.log(matches[0]);
                    }
                }
                console.log(x++);
                console.log("-------------------------");
            });

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
                    width: '500',
                    type: 'pie'
                },

                title: {
                    text: 'OSI - for release only?'
                },

                yAxis: {
                    title: {
                        text: 'Points/Capacity Remaining'
                    }
                },

                xAxis: {
                    categories: ['August 1', 'August 2', 'August 3', 'August 4', 'August 5', 'August 6',
                        'August 7', 'August 8', 'August 9', 'August 10', 'August 11', 'August 12']
                },

                series: [{
                    name: 'Salesforce',
                    data: [2, 3, 5, 1, 2, 0, -2, 3, 2, 1, 4, 5]
                }]
            });

            //container 4
            Highcharts.chart('container4', {
                chart: {
                    width: '500',
                    type: 'column'
                },

                title: {
                    text: 'Scope Volatility'
                },

                yAxis: {
                    title: {
                        text: 'Scope Post Start of Iteration'
                    }
                },

                xAxis: {
                    title: {
                        text: 'Iterations'
                    },
                    categories: ['Iteration 1', 'Iteration 2', 'Iteration 3', 'Iteration 4', 'Iteration 5', 'Iteration 6',
                        'Iteration 7', 'Iteration 8', 'Iteration 9', 'Iteration 10', 'Iteration 11', 'Iteration 12']
                },

                series: [{
                    name: "Scope Post Start of Iteration",
                    data: [25, 20, 20, 40, 40, 25, 35, 40, 25, 50]
                }, {
                    name: "Scope at Start of Iteration",
                    data: [25, 20, 30, 50, 30, 50, 45, 30, 25, 50]
                }]
            });

            //container 5
            Highcharts.chart('container5', {
                chart: {
                    width: '500'
                },

                title: {
                    text: 'Delivered Defect Rate'
                },

                yAxis: {
                    title: {
                        text: 'Defects'
                    }
                },

                xAxis: {
                    title: {
                        text: 'Points Delivered'
                    }
                },

                series: [{
                    name: 'Salesforce',
                    data: [[25, 20], [30, 30], [40, 35], [40, 40], [65, 45], [70, 50], [75, 60], [80, 80], [100, 100], [105, 105], [105, 105], [110, 110]]
                }]
            });

            //container 6
            Highcharts.chart('container6', {
                chart: {
                    width: '500',
                    type: 'column'
                },

                title: {
                    text: 'Estimation Volume'
                },

                yAxis: {
                    title: {
                        text: 'Hours'
                    }
                },

                xAxis: {
                    title: {
                        text: 'Release'
                    },
                    categories: ['Release 1', 'Release 2', 'Release 3', 'Release 4', 'Release 5', 'Release 6',
                        'Release 7', 'Release 8', 'Release 9', 'Release 10', 'Release 11', 'Release 12']
                },

                series: [{
                    name: "Hours in Release",
                    data: [55, 50, 30, 50, 70, 45, 55, 60, 65, 50]
                }, {
                    name: "Actual Hours",
                    data: [50, 60, 50, 70, 70, 50, 55, 60, 80, 50]
                }]
            });

            Highcharts.chart('burn-up', {
                chart: {
                    width: '1500'
                },

                title: {
                    text: 'Burn Up'
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
                    name: 'Points Completed',
                    data: [25, 40, 62, 86, 105, 132, 162, 190, 218, 253, 280, 300]
                },
                    {
                        name: 'Total',
                        data: [300, 300, 300, 300, 300, 300, 320, 320, 320, 320, 300, 300]
                    }]
            });
        });

    });