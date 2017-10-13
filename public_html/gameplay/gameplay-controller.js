function GamePlayCtrl($interval, $scope, dictionaryService) {
    this.playerName;
    this.challengeString;
    this.humanInput;
    this.computerInput;
    this.selectedLevelSpeed;
    this.timerPromise;
    this.clockPromise;
    this.computerInputPromise;
    this.humanSpeed;
    
    this.$onInit = function() {
        this.hasGameStarted = false;
        this.initializeOrReset_();
        this.intervalService_ = $interval;
    };
    
    $scope.$watch(
            (function() {return this.hasGameStarted;}).bind(this),
            (function(newValue) {
                if (newValue === true) {
                    this.challengeString = 
                            dictionaryService.getRandomSentence(20);
                }
            }).bind(this));
    
    $scope.$watch(
            (function() {return this.humanInput;}).bind(this),
            (function(newValue, oldValue) {
                if (newValue !== oldValue &&
                        newValue === this.challengeString) {
                    this.intervalService_.cancel(this.computerInputPromise);
                    this.intervalService_.cancel(this.clockPromise);
                    this.computerInputPromise = null;
                    this.clockPromise = null;
                }
            }).bind(this));
}


/**
 * Initializes or reset the game.
 * 
 * @private
 */
GamePlayCtrl.prototype.initializeOrReset_ = function() {
    // Resetting the timervalue otherwise it will start from the point where
    // it left on the execution of the timerPromise last time.
    this.timerValue = 4;
    // Clearing off the previously written text.
    this.humanInput = '';
    this.computerInput = '';
    this.humanSpeed = 0;
};


/**
 * Toggles the game status and proceed accordingly.
 */
GamePlayCtrl.prototype.toggleGameStatus = function() {
    /** 
     * If there is any existing $interval action going on then cancel those
     * promises so that the services can start from the scratch the next time.
     */
    if (this.timerPromise) {
        this.intervalService_.cancel(this.timerPromise);
        this.timerPromise = null;
    }    
    if (this.computerInputPromise) {
        this.intervalService_.cancel(this.computerInputPromise);
        this.computerInputPromise = null;
    }
    if (this.clockPromise) {
        this.intervalService_.cancel(this.clockPromise);
        this.clockPromise = null;
    }
    this.hasGameStarted = !this.hasGameStarted;
    if (this.hasGameStarted) {
        this.timerPromise = this.intervalService_(
                (function() {this.timerValue--;}).bind(this), 1000, 4);
        this.timerPromise
                .then(
                (function() {
                    var index = 0;
                    this.computerInputPromise = this.intervalService_(
                        (function() {
                            this.computerInput += this.challengeString[index++];
                        }).bind(this),
                        1000/this.selectedLevelSpeed,
                        this.challengeString.length);
                    var tick = 1;
                    this.clockPromise = this.intervalService_(
                            (function() {
                                this.humanSpeed = this.humanInput.length/tick++;
                            }).bind(this),
                            1000,
                            (this.challengeString.length)/this.selectedLevelSpeed);
                }).bind(this))
                .catch(function(){});
    } else {
        this.initializeOrReset_();
    }
};


angular
        .module('typeRacer')
        .controller(
            'GamePlayCtrl', ['$interval', '$scope', 'dictionaryService', GamePlayCtrl]);
