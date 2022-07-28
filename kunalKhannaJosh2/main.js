let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle("active");
  cart.classList.remove("active");
  dishModal.classList.remove("active");
  
  //enabling scrolling
    document.getElementsByTagName("body")[0].style.overflow="visible";
};

let cart = document.querySelector(".cart");

document.querySelector("#cart-icon").onclick = () => {
  search.classList.remove("active");
  cart.classList.toggle("active");
  dishModal.classList.remove("active");
  
  //checking if modal is open
  if(document.getElementsByTagName("body")[0].style.overflow == "hidden"){
    document.getElementsByTagName("body")[0].style.overflow="visible";
  }
  else {
    document.getElementsByTagName("body")[0].style.overflow="hidden";
    
  }
  
};


let dishModal = document.querySelector(".dishModal");

function requestDish(){
  search.classList.remove("active");
  cart.classList.remove("active");
  dishModal.classList.toggle("active");
  
  //checking if modal is open
  if(document.getElementsByTagName("body")[0].style.overflow == "hidden"){
    document.getElementsByTagName("body")[0].style.overflow="visible";
  }
  else {
    document.getElementsByTagName("body")[0].style.overflow="hidden";
    
  }
}

// back to menu button in request and cart modal
function backToMenu() {
  if(document.getElementsByTagName("body")[0].style.overflow == "hidden"){
    document.getElementsByTagName("body")[0].style.overflow="visible";
  }
  else {
    document.getElementsByTagName("body")[0].style.overflow="hidden";
  }
  cart.classList.remove("active");
  dishModal.classList.remove("active");
  
}

// navBar scroll
let header = document.querySelector("header");

window.addEventListener('scroll', () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

 
// video playback
var ppbutton = document.getElementById("vidbutton");
ppbutton.addEventListener("click", playPause);

var vidscreen = document.getElementById("myvid");
vidscreen.addEventListener("click", playPause);

myVideo = document.getElementById("myvid");
function playPause() {
  if (myVideo.paused) {
    ppbutton.classList.toggle("active");
    myVideo.play();
    setTimeout(() => {
      const box = document.getElementById("vidbutton");

      box.style.visibility = 'hidden';
    }, 2000); 
  } else {
    myVideo.pause();
    const box = document.getElementById("vidbutton");
    box.style.visibility = 'visible';
    ppbutton.classList.toggle("active");
  }
}

var video = document.getElementById('myvid')
video.addEventListener('ended', function(){
  video.load();
});


