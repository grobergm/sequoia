var pathes = document.querySelectorAll('path');
var logo = document.getElementById('logo')

pathes.forEach(function(element,index){
  var red= Math.floor(Math.random()*255);
  var green= Math.floor(Math.random()*255);
  var blue= Math.floor(Math.random()*255);

  var xMod = 1;
  var yMod = 1;

  if (index % 2 === 0){
    xMod= -1
  }
  if (index % 5 === 0){
    yMod= -1
  }

TweenLite.from(element, 3, {
  y: 10 * yMod * index, 
  x: 10 * xMod * index,
  fill: "rgb("+red+","+green+","+blue+")",
  ease: Circ.inOut,
});
  
})  



logo.addEventListener('mousemove',function(event){

  
  pathes.forEach(function(element,index){
    var red= Math.floor(Math.random()*255);
    var green= Math.floor(Math.random()*255);
    var blue= Math.floor(Math.random()*255);
    var xMod = 1;
    var yMod = 1;

    if (index % 2 === 0){
      xMod= -1
    }
    if (index % 5 === 0){
      yMod= -1
    }

    var xPos = (event.clientX/window.innerWidth-0.5),
       yPos = (event.clientY/window.innerHeight-0.5);
    // var xPos = Math.random(),
    //    yPos = Math.random();


  TweenLite.to(element, 1, {
    y: yPos * 10 * yMod * index, 
    x: xPos * 10 * xMod * index,
    fill: "rgb("+red+","+green+","+blue+")",
    ease: Power1.easeOut,
  });
    
  })  
});
logo.addEventListener('mouseleave',function(event){
  
  pathes.forEach(function(element,index){
  
  TweenLite.to(element, 1, {
    y: 0, 
    x: 0,
    // fill:'rgba(255,255,255)',
    ease: Power1.easeOut,
  });
    
  })  
});