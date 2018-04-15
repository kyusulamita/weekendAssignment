var app = angular.module('weekend', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      template: '<h1>Welcome to Pokemon Trading!</h1>'
    })
    .state('products', {
      url: '/products',
      templateUrl: '/client/templates/productsPage.html',
    })
    $urlRouterProvider.otherwise('/');

});
