function TypeRacerCtrl($scope) {
    this.selectedLevelSpeed;
    this.playerName;
    
    this.$onInit = function() {
        this.levels = [
            {
                levelName: 'Beginner',
                charsPerSecond: 3
            },
            {
                levelName: 'Intermediate',
                charsPerSecond: 7
            },
            {
                levelName: 'Expert',
                charsPerSecond: 9
            }
        ];
        this.shouldShowRacingPage = false;
    };
}


/*
 * Whether to show the racing page.
 * 
 * @param {boolean} isSubmitted
 */
TypeRacerCtrl.prototype.showRacingPage = function(isSubmitted) {
    this.shouldShowRacingPage = isSubmitted;
};

angular
        .module('typeRacer')
        .controller('TypeRacerCtrl', ['$scope', TypeRacerCtrl]);
