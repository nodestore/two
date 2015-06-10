var myApp= angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider) {
	$routeProvider
	.when('/main',{
		templateUrl:'views/main.html',
		controller:'mainCtrl'
	})

	.when('/product',{
		templateUrl:'views/product.html',
		controller:'proCtrl'
	})
	.when('/about',{
		templateUrl:'views/about.html',
		controller:'aboutCtrl'
	})
	.when('/msg',{
		templateUrl:'views/msg.html',
		controller:'msgCtrl'
	})
	.when('/chats',{
		templateUrl:'views/chats.html',
		controller:'chatsCtrl'
	})
	.otherwise({
		redirectTo:'/main'
	})
});

myApp.controller('mainCtrl',function($scope){
	$scope.title="主页";
});
myApp.controller('proCtrl',function($scope){
	$scope.title="产品"
});
myApp.controller('aboutCtrl',function($scope){
	$scope.title="关于TWO";
});
myApp.controller('msgCtrl',function($scope){
	$scope.title="情报"
});
myApp.controller('chatsCtrl',function($scope){
	$scope.title="谈谈"
});