var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var slide = document.querySelectorAll("div.gallery div.photos div.block");
var i = 0;



nextBtn.addEventListener('click',function() {
  
  slide[i].classList.remove("active");
  i++;

  if (i >= slide.length) {
    i = 0;
  }

  slide[i].classList.add("active");
})



prevBtn.addEventListener('click', function() {
  slide[i].classList.remove("active");
  i--;

  if (i < 0) {
    i = slide.length - 1;
  }
  slide[i].classList.add("active");
})
