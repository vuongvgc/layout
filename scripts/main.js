let myImage= document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute ('src')
    if (mySrc === 'images/love.jpg')
        {
            myImage.setAttribute ('src','images/love1.jpg');
            
        }
    else {
        myImage.setAttribute ('src','images/love.jpg');
        
    }
        
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Dù chuyện gì xảy ra, trên đời này vẫn có một điều rất dễ chịu, đó là yêu!.  ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Dù chuyện gì xảy ra, trên đời này vẫn có một điều rất dễ chịu, đó là yêu!.' + storedName;
}
myButton.onclick = function() {
  setUserName();
}