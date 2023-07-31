var p1 = (Math.floor(Math.random()*6)+1);
var p2 = (Math.floor(Math.random()*6)+1);
document.querySelector(".img1").src = "images/dice"+p1+".png";
document.querySelector(".img2").src = "images/dice"+p2+".png";
if (p1>p2){
  document.querySelector("a").innerHTML = "<a href='index.html'>Player 1 Won!</a>";
}
else if (p2>p1){
    document.querySelector("a").innerHTML = "<a href='index.html'>Player 2 Won!</a>";
}
else{
  document.querySelector("a").innerHTML = "<a href='index.html'>Draw!!</a>";
}
