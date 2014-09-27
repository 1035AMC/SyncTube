myApp = angular.module("syncTube")


myApp.controller("mainController", function($scope, $http) {
    $scope.formData = {};

    $http.get("/api/todos").success(function(data) {
        $scope.todos = data;
    }).error(function(err) {
        console.log(err);
    });

    $scope.createTodo = function() {
        $http.post("/api/todos", formData).success(function(data) {
            $scope.formData = {};
            $scope.todos = data;
            console.log(data);
        }).error(function(err) {
            console.log(err);
        });
    };

    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

});
