/**
 * @author msarno
 *
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.sensory', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('sensory', {
          url: '/sensory',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'Sensory',
          sidebarMeta: {
            icon: 'ion-ios-flask-outline',
            order: 100,
          },
        }).state('sensory.list', {
          url: '/list',
          templateUrl: 'app/pages/sensory/sensoryList.html',
          title: 'Listado',
          controller: 'SensoryListCtrl',
          controllerAs: 'vm',
          sidebarMeta: {
            order: 100,
          },
        }).state('sensory.evaluation', {
          url: '/evaluation',
          templateUrl: 'app/pages/sensory/sensory.html',
          title: 'Nueva Evaluación',
          controller: 'SensoryEvaluationCtrl',
          controllerAs: 'vm',
          sidebarMeta: {
            order: 200,
          },
        });
    $urlRouterProvider.when('/sensory', '/sensory/list', '/sensory/evaluation');
  }

})();
