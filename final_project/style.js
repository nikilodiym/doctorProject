document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopButton = document.querySelector(".scroll-to-top");
  
    window.addEventListener("scroll", function() {
      if (window.scrollY > 200) {
        scrollToTopButton.classList.add("show");
      } else {
        scrollToTopButton.classList.remove("show");
      }
    });
  
    scrollToTopButton.addEventListener("click", function(e) {
      e.preventDefault();
      scrollToTop(800);
    });
  
    function scrollToTop(duration) {
      var startingY = window.pageYOffset;
      var startTime = null;
  
      function step(timestamp) {
        if (!startTime) {
          startTime = timestamp;
        }
  
        var progress = timestamp - startTime;
        var easeInOutCubic = function(t) {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        };
  
        var y = Math.min(startingY - startingY * easeInOutCubic(progress / duration), startingY);
  
        window.scrollTo(0, y);
  
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      }
  
      window.requestAnimationFrame(step);
    }
  });
  
  