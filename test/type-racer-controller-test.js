/* global expect */

describe('TypeRacerCtrl', function() {
    beforeEach(angular.mock.module('typeRacer'));
    
    var ctrl;
    var $controller;
    var scope;
    
    beforeEach(inject(function(_$rootScope_, _$controller_) {
        $controller = _$controller_;
        scope = _$rootScope_.$new();
        ctrl = $controller('TypeRacerCtrl', {$scope: scope});
    }));
    
    it('should show racing page', function() {
        expect(ctrl.shouldShowRacingPage).toBeFalsy();
        ctrl.showRacingPage(true);
        expect(ctrl.shouldShowRacingPage).toBeTruthy();
        ctrl.showRacingPage(false);
        expect(ctrl.shouldShowRacingPage).toBeFalsy();        
    });
    
    it(
       'should watch the radio options for selecting difficulty level and ' +
       'correpsondingly update the difficulty level speed',
       function() {
           ctrl.$onInit();
           scope.$apply();
           expect(ctrl.selectedLevelName).toBeUndefined();
           expect(ctrl.selectedLevelSpeed).toBeUndefined();
           ctrl.selectedLevelName = 'Beginner';
           scope.$apply();
           expect(ctrl.selectedLevelSpeed).toBe(3);
           ctrl.selectedLevelName = 'Expert';
           scope.$apply();
           expect(ctrl.selectedLevelSpeed).toBe(9);
       });
});
