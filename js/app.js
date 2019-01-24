/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.

var changeMatCount = document.getElementById('matCount');
changeMatCount.innerHTML = 11;


//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.

var changeMsgCount = document.getElementById('msgCount');
changeMsgCount.innerHTML = 23;

//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.

var changeName = document.getElementById('fullname');
changeName.innerHTML = 'Ronald McDonald';

//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.

var changeAge = document.getElementById('age');
changeAge.innerHTML = '63 Years Old';

//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.

var giveInfo = document.createElement('div');
giveInfo.id = 'job';
giveInfo.innerHTML = 'Clown and Restauranteur';
data.appendChild(giveInfo);


//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.

var addHobbies = document.createElement('div');
addHobbies.id = 'hobbies';
addHobbies.innerHTML = 'Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King';
data.appendChild(addHobbies);

//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.

var addLocation = document.createElement('div');
addLocation.id = 'location';
addLocation.innerHTML = 'Honolulu, HI'
data.appendChild(addLocation)

//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.

var addWants = document.createElement('div');
addWants.id = 'wants';
addWants.innerHTML = 'Looking for a Mrs. McDonald'
data.appendChild(addWants)

//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).

var makeParagraph2 = document.createElement('p');
makeParagraph2.id = 'pro2';
makeParagraph2.innerHTML = 'I love to sell BigMacs and French Fries to my customers. Also our Coke is the best in the World!'
profile.appendChild(makeParagraph2)

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.

var changeName = document.getElementsByClassName('firstName');
changeName[0].innerHTML = 'Wendy';

//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.

var changeAge = document.getElementsByClassName('otherAge');
console.log(changeAge)
changeAge[0].innerHTML = 48

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.

var changeStatus = document.getElementsByClassName('status');
changeStatus[0].innerHTML = 'Single Mother'

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.

changeName[1].innerHTML = 'Peko Chan'

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.

changeAge[1].innerHTML = 68

 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto




