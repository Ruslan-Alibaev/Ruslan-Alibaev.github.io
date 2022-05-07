var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/rechk.jpg') {
      myImage.setAttribute ('src','img/firefox2.png');
    } else {    
      myImage.setAttribute ('src','img/rechk.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
myButton.onclick = function() {
  setUserName();
}
