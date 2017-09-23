function TypeRacerCtrl($scope) {
    this.selectedLevelName;
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
    
    $scope.$watch(
            (function() {return this.selectedLevelName;}).bind(this),
            (function(newVal, oldVal) {
                if (newVal !== oldVal) {
                    for (var index=0; index<this.levels.length; index++) {
                        for (var key in this.levels[index]) {
                            if (this.levels[index].hasOwnProperty(key)
                                    && key==='levelName'
                                    && this.levels[index][key] 
                                    === this.selectedLevelName) {
                                this.selectedLevelSpeed =
                                        this.levels[index]['charsPerSecond'];
                            }
                        }
                    }
                }
            }).bind(this));
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