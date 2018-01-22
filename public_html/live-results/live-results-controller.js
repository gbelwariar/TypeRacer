function LiveResultsCtrl() {
    this.challengeString;
    this.computerInput;
    this.humanInput;
    this.result;
    this.hasGameStarted;
    
    this.$onInit = function() {
        this.finalResult = null;
    };
    
    this.$onChanges = function(changes) {
        if (changes.humanInput && changes.humanInput.currentValue.length!==0) {
            var currentHumanInput = changes.humanInput.currentValue;
            var isPrefix = true;
            for (var index=0; index<currentHumanInput.length; index++) {
                if (currentHumanInput[index] !==
                        this.challengeString[index]) {
                    isPrefix = false;
                    break;
                }
            }
            this.result = isPrefix;
        }
        if (changes.hasGameStarted) { 
            if (!changes.hasGameStarted.currentValue) {
                this.finalResult = null;
            }
        }
        if (!this.finalResult) {
            var currentComputerInput = this.computerInput;
            if (changes.computerInput) {
                currentComputerInput = changes.computerInput.currentValue;
            }
            if (currentHumanInput && currentComputerInput && 
                    currentHumanInput.length === currentComputerInput.length &&
                    currentHumanInput === this.challengeString) {
                this.finalResult = "It's a tie!";
            } else if (currentHumanInput && (!currentComputerInput || 
                    (currentComputerInput &&
                    currentHumanInput.length > currentComputerInput.length)) &&
                    currentHumanInput === this.challengeString) {
                this.finalResult = "You won!";
            } else if (currentComputerInput &&
                    currentComputerInput === this.challengeString) {
                this.finalResult = "You lost!";
            }
        }            
    };
}


angular
        .module('typeRacer')
        .controller('LiveResultsCtrl', LiveResultsCtrl);
