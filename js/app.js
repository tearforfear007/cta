var app = angular.module('ctaApp', ['ngAnimate','ui.router','ui.grid','ui.bootstrap','ngSanitize','ui.grid.autoResize']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    // 定義 $state
    $stateProvider
        // 首頁
        .state('/', {
            url: '/',
            templateUrl: "view/home.html"
        })
        .state('home', {
            url: '/',
            templateUrl: "view/home.html"
        })
        .state('userFunction', {
            url: '/userFunction',
            templateUrl: "view/userFunction.html"
        })
        .state('modifyIncomeDetails', {
            url: '/modifyIncomeDetails',
            templateUrl: "view/modifyIncomeDetails.html"
        })
        .state('setting', {
            url: '/setting',
            templateUrl: "view/setting.html"
        })
        .state('inventoryManagement', {
            url: '/inventoryManagement',
            templateUrl: "view/inventoryManagement.html"
        })
        .state('outcomeManagement', {
            url: '/outcomeManagement',
            templateUrl: "view/outcomeManagement.html"
        });
});

$(document).ready(function(){
  $('.dropdown-submenu a').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});