angular.module('app', [])
.controller('MainCtrl', function() {
  var vm = this;

  vm.data = ['dan', 'hila'];
})

.directive('firstDirective', function() {
  return {
    templateUrl: 'public/app/templates/firstdirective.html'
  }
})
