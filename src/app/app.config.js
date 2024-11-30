export default [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject'; // 確保使用 ngInject 來處理依賴注入

    // 配置路由
    $stateProvider
      .state('home', {
        url: '/home',
        template: '<home></home>',
      })
      .state('search', {
        url: '/search',
        template: '<search></search>',
      });

    // 預設路由
    $urlRouterProvider.otherwise('/home');
    // $locationProvider.hashPrefix(''); //啟用 hashbang 模式
    $locationProvider.html5Mode(true); //history api
  },
];
