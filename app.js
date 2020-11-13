let picture = document.querySelector('.pictures');
let rightClick = document.querySelector('.right-arrow');
let leftClick = document.querySelector('.left-arrow');


let picArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg'];

let perClickResponse = 0;
console.log(`picArray length = ${picArray.length} and perClickResponse = ${perClickResponse}`);




//click event for right click
rightClick.addEventListener('click', rightClickEvent);


function rightClickEvent(){
 console.log('right click event work');
 perClickResponse += 1;
 if(perClickResponse <= (picArray.length-1)){
 picture.style.background = `url(/pictures/${picArray[perClickResponse]})`;
 console.log(perClickResponse);
 } else {
  perClickResponse *= 0;
  picture.style.background = `url(/pictures/${picArray[perClickResponse]})`;
  console.log(perClickResponse);
 }
 
}



//click event for left click
leftClick.addEventListener('click', leftClickEvent);

function leftClickEvent(){
 console.log('left click event work');
 perClickResponse -= 1;
 if(perClickResponse <= (picArray.length-1) && perClickResponse != -1){
  picture.style.background = `url(/pictures/${picArray[perClickResponse]})`;
  console.log(perClickResponse);
  } else {
   perClickResponse = (picArray.length-1);
   picture.style.background = `url(/pictures/${picArray[Math.abs(perClickResponse)]})`;
   console.log(perClickResponse);
  }
}