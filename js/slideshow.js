var overlay = document.querySelector("div.overlay");
var allGal = document.querySelectorAll("div.allGal div.ok img");

    for (var i=0; i < allGal.length; i++) {
        allGal[i].addEventListener('click', popUp);
    }
  
function popUp(){

    var nextBtn = document.getElementById("next");
    var prevBtn = document.getElementById("prev");
    var playBtn = document.getElementById("play");
    var stopBtn = document.getElementById("stop");
    var closeBtn = document.getElementById("close");
    var slide = document.querySelectorAll("div.slideshow div.specphotos div.blocka");
    var i = 0;

    overlay.style.display = "flex";

  
//NEXT BUTTON
    nextBtn.addEventListener('click',function() {
    
        slide[i].classList.remove("active");
        i++;
  
        if (i >= slide.length) {
            i = 0;
        }
  
        slide[i].classList.add("active");
    });
  
//PREV BUTTON
    prevBtn.addEventListener('click', function() {
      
        slide[i].classList.remove("active");
        i--;
  
        if (i < 0) {
            i = slide.length - 1;
        }

        slide[i].classList.add("active");
    });
   
  
//PLAY and STOP BUTTONS
    playBtn.addEventListener('click', slideshow);
    
    function slideshow() {
        var playShow = setInterval(function (){
            slide[i].classList.remove("active");
            i++;
            if (i >= slide.length) {
                i = 0;
            }
            slide[i].classList.add("active"); 
        },2500);
        stopBtn.addEventListener('click', function() {
            clearInterval(playShow);
        });
    }

  //CLOSE BUTTON
    closeBtn.addEventListener("click", function() {
        overlay.style.display = "none";
  
    }); 
}
  
  
