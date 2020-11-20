const arrOne = document.querySelector('.arr-1');
const arrTwo = document.querySelector('.arr-2');
const arrThree = document.querySelector('.arr-3');
const arrFour = document.querySelector('.arr-4');
const linkOne = document.querySelector('.link-1');
const linkTwo = document.querySelector('.link-2');
const linkThree = document.querySelector('.link-3');
const linkFour = document.querySelector('.link-4');
const linkFive = document.querySelector('.link-5');
const arrowOne = document.querySelector('.arrow1');
const arrowTwo = document.querySelector('.arrow2');
const arrowThree = document.querySelector('.arrow3');
const arrowFour = document.querySelector('.arrow4');
const undOne = document.querySelector('.und-1');
const undTwo = document.querySelector('.und-2');
const undThree = document.querySelector('.und-3');
const undFour = document.querySelector('.und-4');
const selectBtn = document.querySelector('.select-mode');
const deleteBtn = document.querySelector('.delete-mode');
const addLink = document.querySelector('.add-link')



//---------------------------------------------------
//                     ARRAYS                
//---------------------------------------------------

let selectMode = true

addLink.addEventListener('click', () => {
  linkFive.classList.remove('hidden')
  arrowFour.classList.remove('hidden')
})

selectBtn.addEventListener('click', () => {
  selectMode = true;
})
deleteBtn.addEventListener('click', () => {
  selectMode = false;
})

arrOne.addEventListener('click', () => {
  if(selectMode){
    arrOne.style.background = "green";
  } else {
    undOne.classList.remove("hidden")
    arrOne.style.background = "whitesmoke";
    arrOne.style.borderBottom = "2px solid black"
    arrOne.style.borderRadius = "0"
  }
})
arrTwo.addEventListener('click', () => {
  if(selectMode){
    arrTwo.style.background = "green";
  } else {
    undTwo.classList.remove("hidden")
    arrTwo.style.background = "whitesmoke";
    arrTwo.style.borderBottom = "2px solid black"
    arrTwo.style.borderRadius = "0"
  }
})
arrThree.addEventListener('click', () => {
  if(selectMode){
    arrThree.style.background = "green"
  } else {
    undThree.classList.remove("hidden")
    arrThree.style.background = "whitesmoke";
    arrThree.style.borderBottom = "2px solid black"
    arrThree.style.borderRadius = "0"
  }
})
arrFour.addEventListener('click', () => {
  if(selectMode){
    arrFour.style.background = "green"
  } else {
    undFour.classList.remove("hidden")
    arrFour.style.background = "whitesmoke";
    arrFour.style.borderBottom = "2px solid black"
    arrFour.style.borderRadius = "0"
  }
})

//---------------------------------------------------
//                     LINKED LISTS                
//---------------------------------------------------
let linkBoolOne = true;
let linkBoolTwo = false;
let linkBoolThree = false;
let linkBoolFour = false;
let count = 0


linkOne.addEventListener('click', () => {
  linkOne.style.background = "green";
  arrowOne.classList.remove("hidden");
  linkBoolTwo = true
})
linkTwo.addEventListener('click', () => {
  if(linkBoolTwo){

    linkTwo.style.background = "green";
    arrowTwo.classList.remove("hidden");
    linkBoolThree = true
  }
})
linkThree.addEventListener('click', () => {

  if(count === 1){
    linkThree.classList.add("hidden")
  }
  if(linkBoolThree){
  count +=1 ;
  linkThree.style.background = "green";
  arrowThree.classList.remove("hidden");
  }
})

linkFour.addEventListener('click', () => {
  if(linkBoolThree){

    linkFour.style.background = "green";
    arrowFour.classList.remove("hidden");
  }
})