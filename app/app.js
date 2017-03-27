'use strict';

var app = angular.module('customersApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'CustomersController',
                templateUrl: '/partials/customers.html'
            })
        .when('/customers',
            {
                controller: 'CustomersController',
                templateUrl: '/partials/customers.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/customerorders/:customerID',
            {
                controller: 'CustomerOrdersController',
                templateUrl: '/partials/customerOrders.html'
            })
        .when('/orders',
            {
                controller: 'OrdersController',
                templateUrl: '/partials/orders.html'
            })
        .otherwise({ redirectTo: '/customers' });
});

