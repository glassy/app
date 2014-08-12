angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, $stateParams, Friends) {
  $scope.greens = Friends.green();
  $scope.boss = Friends.boss();

  $scope.party = $stateParams.partyName;

  $scope.groups = [{n:'green', t: '綠黨'},
  				   {n:'boss', t:'人民民主陣線'}];
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('WayCtrl', function($scope) {
});
