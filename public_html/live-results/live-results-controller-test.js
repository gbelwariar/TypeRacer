/* global expect, $rootScope */

describe('LiveResultsCtrl', function() {
    beforeEach(angular.mock.module('typeRacer'));
    
    var ctrl;
    var scope;
    var changes;
    var changesClone;
    
    beforeEach(inject(function(_$rootScope_, _$controller_) {
        scope = _$rootScope_.$new();
        var bindings = {
            challengeString: 'test string',
            humanInput: '',
            computerInput: '',
            hasGameStarted: true
        };
        changes = {
            challengeString: {
                currentValue: 'test string',
                previousValue: '',
                isFirstChange: function(){return true;}
            },
            humanInput: {
                currentValue: '',
                isFirstChange: function() {return true;}
            },
            computerInput: {
                currentValue: '',
                isFirstChange: function() {return true;}
            },
            hasGameStarted: {
                currentValue: true,
                isFirstChange: function() {return true;}
            }
        };
        ctrl = _$controller_('LiveResultsCtrl', {$scope: scope}, bindings);
    }));
    
    describe('when human changes the input', function() {

        beforeEach(function() {
           changesClone = angular.copy(changes);
        });

        it('should watch changes in humanInput', function() {
            expect(ctrl.result).toBeUndefined();
            ctrl.$onChanges(changesClone);
            expect(ctrl.result).toBeUndefined();
            changesClone.humanInput.currentValue = 'test';
            ctrl.$onChanges(changesClone);
            expect(ctrl.result).toBeDefined();
        }); 
        
        it('should provide live results', function() {
            changesClone.humanInput.currentValue = 'x';
            ctrl.$onChanges(changesClone);
            expect(ctrl.result).toBeFalsy();
            changesClone.humanInput.currentValue = 'xtest';
            ctrl.$onChanges(changesClone);
            expect(ctrl.result).toBeFalsy();
            changesClone.humanInput.currentValue = 't';
            ctrl.$onChanges(changesClone);
            expect(ctrl.result).toBeTruthy();
            changesClone.humanInput.currentValue = 'tt';
            ctrl.$onChanges(changesClone);
            expect(ctrl.result).toBeFalsy();
            changesClone.humanInput.currentValue = 't';
            ctrl.$onChanges(changesClone);
            expect(ctrl.result).toBeTruthy();            
            changesClone.humanInput.currentValue = 'test';
            ctrl.$onChanges(changesClone);
            expect(ctrl.result).toBeTruthy();           
            changesClone.humanInput.currentValue = 'teststring';
            ctrl.$onChanges(changesClone);
            expect(ctrl.result).toBeFalsy();
            changesClone.humanInput.currentValue = 'test string';
            ctrl.$onChanges(changesClone);
            expect(ctrl.result).toBeTruthy();    
        });
        
        it('should declare the results', function() {
            ctrl.$onInit();
            expect(ctrl.finalResult).toBe(null);
            changesClone.humanInput.currentValue = 'test';
            ctrl.$onChanges(changesClone);
            expect(ctrl.finalResult).toBe(null);
            changesClone.humanInput.currentValue = 'test string';
            ctrl.$onChanges(changesClone);
            expect(ctrl.finalResult).toBe('You won!');            
            changesClone.computerInput.currentValue = 'test string';
            ctrl.finalResult = null;
            ctrl.$onChanges(changesClone);
            expect(ctrl.finalResult).toBe("It's a tie!");            
            changesClone.humanInput.currentValue = 'test';
            ctrl.finalResult = null;
            ctrl.$onChanges(changesClone);
            expect(ctrl.finalResult).toBe('You lost!');                        
        });
        
        it(
           'should not re-declare the results if it has been declared once',
           function() {
               ctrl.finalResult = 'You lost!';
               changesClone.humanInput.currentValue = 'test string';
               ctrl.$onChanges(changesClone);
               expect(ctrl.finalResult).toBe('You lost!');            
           });
    });
});
