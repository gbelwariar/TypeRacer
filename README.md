<a href="https://github.com/gbelwariar"><img style="position: absolute; top: 0; left: 0; border: 0;" src="https://camo.githubusercontent.com/82b228a3648bf44fc1163ef44c62fcc60081495e/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_red_aa0000.png"></a>
# TypeRacer
A lightweight type-racing game (played against computer) built with JavaScript and AngularJS framework that can be played in a browser itself (**Requires no installation, internet-connection!**).

## Languages/Frameworks Used - 

1) JavaScript  
2) AngularJS (1.x)
3) HTML
4) CSS

## Phases of the Projects

**1. Requirements** - Any browser would work. An internet connection is not reuired.<br/>
**2. Design** - Angular's routing technique is not used in this project. Instead this project just removes/hides the various DOM elements, thus maintaining the same URL throughout.<br/>
**3. Implementation** - Refer to the "**Languages/Frameworks Used**" section above to know the technologies used in the implementation of this project.<br/>
**4. Testing** - The tests can be found [here](https://github.com/gbelwariar/TypeRacer/tree/master/test) and [here](https://github.com/gbelwariar/TypeRacer/tree/master/test/jasmine). These are organized in a similar fashion as the main implementation files.<br/>
**5. Maintenance** - Any suggestions to improve the projects are welcome on gbelwariar@gmail.com.<br/>

## Components of the Projects

Name of the Component                                                                                                    | Description
-------------------------------------------------------------------------------------------------------------------------| -------------
[**Home Screen**](https://github.com/gbelwariar/TypeRacer/blob/master/public_html/type-racer-controller.js)              | This is the component to which all the other components are loosely coupled with. It is responsible for the following tasks -<br/> 1) Fetching the difficulty level and name from the user playing the game.<br/> 2) Initialization of the game.
[**Gameplay**](https://github.com/gbelwariar/TypeRacer/tree/master/public_html/gameplay)                                 | Responsible for the following tasks -<br/> 1) Resetting the game variables everytime the game is reset.<br/> 2) Installation of the timer responsible for the count down till the game starts.<br/> 3) Calculation of the live speed of the human-entered input.<br/>                                                                                       
[**Live Results**](https://github.com/gbelwariar/TypeRacer/tree/master/public_html/live-results)                         | Responsible for the following tasks -<br/> 1) Displaying the live status which would reflect whether the text entered by the player matches with a prefix of the challenge string. If it matches then a tick (✔) otherwise a cross (✘) is displayed.<br/> 2) Declaring the winner of the game or if both finishes the game at the same time then the game is said to be drawn.        
[**Dictionary Service**](https://github.com/gbelwariar/TypeRacer/blob/master/public_html/services/dictionary-service.js) | Responsible for providing the challenge string. By default the number of words in the challenge string is 20 and all the words are selected randomly out of about 600 words present in the dictionary. All the words are valid English words.

## Scope of improvements

1) Use simpler words to form the challenge string. Currently, all the words are valid English words but some of them are very uncommon and unheard words which makes it harder for the user to type.
2) Use Angular's Routing Technique to direct different pages of this application to different URLs. Currently, the pages are simply removed from the DOM to show up a new page which makes it harder to develop and track the flow of control and data between different pages.

