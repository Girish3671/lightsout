
// numbers from 1 to 6
var randomnumber1=Math.random()*6;
randomnumber1=Math.floor(randomnumber1+1);


// To select random image 
var randomdiceimage="dice"+randomnumber1+".png";


// to provide the source of the image 
var randomimagesource="images/"+randomdiceimage;


// selecting left image and assigning it to a variable
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);

// setting the second image
var randomnumber2=Math.floor(Math.random()*6+1);
var imagesource="images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imagesource);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Girish wins🚩";
    document.querySelectorAll("p")[0].innerHTML="Jay should turn off lights💡"
}
else if(randomnumber1<randomnumber2){
   document.querySelector("h1").innerHTML="🚩Jay wins";
   document.querySelectorAll("p")[0].innerHTML="Girish should turn off lights💡"
}
else{
    document.querySelector("h1").innerHTML="its a draw🏳️";
}