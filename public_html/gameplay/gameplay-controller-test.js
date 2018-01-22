/* global expect, spyOn */

describe('GamePlayCtrl', function() {

    beforeEach(angular.mock.module('typeRacer'));
    
    var ctrl;
    var scope;
    var dictionaryService;
    var intervalService;
        
    beforeEach(inject(function(
            _$rootScope_, _$controller_, _$interval_, _dictionaryService_) {
        scope = _$rootScope_.$new();
        var bindings = {
            playerName: 'Rachit',
            selectedLevelSpeed: 3
        };
        dictionaryService = _dictionaryService_;
        spyOn(dictionaryService, 'getRandomSentence')
                .and.returnValue('test string');
        intervalService = _$interval_;
        spyOn(intervalService, 'cancel');
        ctrl = _$controller_('GamePlayCtrl', {$scope: scope}, bindings);
    }));
    
    it('should watch when the game starts', function() {
        ctrl.$onInit();
        scope.$apply();
        expect(ctrl.challengeString).toBeUndefined();
        ctrl.hasGameStarted = true;
        scope.$apply();
        expect(dictionaryService.getRandomSentence).toHaveBeenCalledWith(20);
        expect(ctrl.challengeString).toBe('test string');
    });
    
    it(
       'should cancel the interval services once the human finishes the ' +
       'challenge',
       function() {
           ctrl.$onInit();
           scope.$apply();
           ctrl.hasGameStarted = true;
           scope.$apply();
           ctrl.humanInput = 'test string';
           scope.$apply();
           expect(intervalService.cancel.calls.count()).toBe(2);
           expect(ctrl.computerInputPromise).toBe(null);
           expect(ctrl.clockPromise).toBe(null);
       });
       
    describe('when toggling the status of the game and when proceeding',
        function() {
            
            it('should cancel uncancelled promises and reset the game variables ' + 
                'when the game is reset', function() {
                ctrl.$onInit();
                ctrl.hasGameStarted = true;
                ctrl.timerPromise = {};
                ctrl.computerInputPromise = {};
                ctrl.clockPromise = {};
                ctrl.toggleGameStatus();
                expect(intervalService.cancel.calls.count()).toBe(3);
                expect(ctrl.timerPromise).toBe(null);
                expect(ctrl.computerInputPromise).toBe(null);
                expect(ctrl.clockPromise).toBe(null);
                expect(ctrl.timerValue).toBe(4);
                expect(ctrl.hasGameStarted).toBeFalsy();
                ctrl.hasGameStarted = false;
                ctrl.toggleGameStatus();
                expect(ctrl.hasGameStarted).toBeTruthy();                
            });
        
            it(
               'should start the game and complete the timer interval service',
               function() {
                   ctrl.$onInit();
                   ctrl.toggleGameStatus();
                   expect(ctrl.hasGameStarted).toBeTruthy();
                   intervalService.flush(4000);
                   expect(ctrl.timerValue).toBe(0);
               });
            
            it(
               'should start and end the computer input interval service',
               function() {
                   ctrl.$onInit();
                   ctrl.toggleGameStatus();
                   intervalService.flush(1e100);
                   expect(ctrl.computerInput).toBe('test string');
               });
    });
});
