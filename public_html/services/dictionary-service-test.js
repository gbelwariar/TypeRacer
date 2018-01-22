/* global expect, spyOn */

describe('DictionaryService', function() {
   beforeEach(angular.mock.module('typeRacer'));
   
   var dictionaryService;
   
   beforeEach(inject(function(_dictionaryService_) {
       dictionaryService = _dictionaryService_;
       spyOn(dictionaryService, 'getRandomWord').and.returnValue('test');     
   }));
   
   describe('when getting a random sentence from the dictionary', function() {
       
       it(
          'should provide a sentence with default number of words if no ' + 
          'argument is specified',
          function() {
              var actualString = dictionaryService.getRandomSentence();
              var expectedString = 'test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test';
              expect(actualString).toBe(expectedString);
          });
       
       it(
          'should provide a sentence with the number of words as specified ' + 
          'in the argument',
          function() {
              expect(dictionaryService.getRandomSentence(3))
                      .toBe('test test test');
          });
                       
       it(
          'should throw an exception if the dictionary does not have enough ' + 
          'number of words as specified in the argument', 
          function() {
              expect(function() {
                  dictionaryService.getRandomSentence(1000000);
              }).toThrow(new Error('Fetching more words than it is present ' +
                      'in the dictionary'));
          });
   });
});
