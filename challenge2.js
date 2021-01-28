document.querySelector("#menu-toggle").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector("#wrapper").classList.toggle("toggled");
});

document.querySelector("#dashboard").addEventListener("click", function() {
    window.location.reload();
});

// document.querySelector(".dropdown-toggle").addEventListener("mousemove", function(){
//     let x = document.querySelector(".dropdown-menu")
//     if(x.style.display === "block"){
// 		x.style.display = "none";
// 	}
// 	else{
// 		x.style.display = "block";
// 	}
// });

document.querySelector(".dropdown-toggle").onmouseover = function(){
  let x = document.querySelector(".dropdown-menu");
  x.style.display = "block";
}
document.querySelector(".dropdown-toggle").onmouseout = function(){
  let x = document.querySelector(".dropdown-menu");
  if(x.style.display === "block"){
    x.style.display = "none";
  }
}
