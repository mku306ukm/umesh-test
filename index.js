
function myFnc(e){
   e.classList.toggle("show");
   var elem = document.getElementById("navID"),
   style = window.getComputedStyle(elem),
   right = style.getPropertyValue("right");
   
   if(right == "0px"){
    elem.style.right = "-260px";

   }else{
       elem.style.right = "0px";
   }
}