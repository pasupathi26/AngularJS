/// <reference path="angular.js" />

var myapp = angular.module("mymodel", [])
                    .controller("mycontroller", function ($scope, $http, $window) {
                        var successcallback = function (response) {
                            $scope.Loginvalue = response.data;
                            if ($scope.Loginvalue == 1) {
                                $scope.Successmessage = "Hello Welcome To AngularJs";
                                $window.location.href = 'Home.html';
                                
                            }
                            else
                                $scope.ErrorMessage = "Invalid userName and Password";

                        };
                        var errorcallback = function (Error) {
                            $scope.ErrorMessage = Error.data;
                        };
                        $scope.Login_click = function () {
                            $http.get("http://localhost:9810/HMUser", {
                                params: { "username": $scope.txtusername, "password": $scope.txtpassword }
                            })
                            .then(successcallback, errorcallback);
                        }
                    });
