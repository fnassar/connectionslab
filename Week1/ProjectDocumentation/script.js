function scrollHandler() {
  var elem1 = document.getElementById('maintitle');
  var elem2 = document.getElementById('slideopen');

  var distanceToTop = window.pageYOffset + elem1.getBoundingClientRect().top;
  var elem1Height = elem1.offsetHeight;
  var elem2Height = elem2.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;
	
	var opacity = 1;
	
	if (scrollTop > distanceToTop) {
		var opacity1 = 1 - (scrollTop- distanceToTop) / elem1Height;
    var opacity2 = (scrollTop- distanceToTop) / elem2Height;
    elem2.style.display = "flex";
	}
  else{
    elem2.style.display = "none";
    elem1.style.opacity = 1;
  }
	
	if (opacity1 >= 0) {
		elem1.style.opacity = opacity1;
	}
  if (opacity2 >= 0) {
		elem2.style.opacity = opacity2;
	}
  else{
    elem2.style.opacity = 0;
  }
}

window.addEventListener('scroll', scrollHandler);