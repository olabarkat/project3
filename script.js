var templates = document.getElementById("templates");
var dropDownMenu = document.getElementById("dropDownMenu");
templates.addEventListener("click" , function(){
if(dropDownMenu.style.display == "flex"){
    dropDownMenu.style.display="none";
}
else{
    dropDownMenu.style.display="flex";
}
});

var menuBtn  = document.querySelector("#menuBtn"); 
var list  = document.querySelector("#list"); 
var overlay  = document.querySelector("#overlay"); 

function openNav(){
            list.style.display= "block";
            overlay.style.display= "block";
}
function closeNav(){
        list.style.display= "none";
        overlay.style.display= "none";
}



