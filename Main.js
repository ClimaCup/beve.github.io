var imageSources=[
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    var randomImage=function(){
  //Selects the img element by searching through the document for anything with the id "target-image"
  var target=document.querySelector("#target-image");
  
  //Chooses a random path or URL from the list of picture paths or URLs above
  var randImageSource=imageSources[Math.floor((Math.random()*imageSources.length))];
  
  //Sets the src attribute of the target to the randomly-chosen path from above
  target.setAttribute("src",randImageSource);
  
}