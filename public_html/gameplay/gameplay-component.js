var gamePlayComponent = {
    bindings: {
        playerName: '@',
        selectedLevelSpeed: '<'
    },
    controller: 'GamePlayCtrl',
    controllerAs: 'gamePlayCtrl',
    templateUrl: 'gameplay/gameplay.html'
};

angular
        .module('typeRacer')
        .component('gamePlay', gamePlayComponent);
