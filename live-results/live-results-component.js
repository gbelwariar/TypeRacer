var liveResultsComponent = {
    bindings: {
        challengeString: '@',
        humanInput: '@',
        computerInput: '@',
        hasGameStarted: '<'
    },
    controller: 'LiveResultsCtrl',
    controllerAs: 'liveResultsCtrl',
    templateUrl: 'live-results/live-results.html'
};

angular
        .module('typeRacer')
        .component('liveResults', liveResultsComponent);
