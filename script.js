document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
  
        const targetId = this.getAttribute('href').substring(1); // Get target section id
        const targetSection = document.getElementById(targetId); // Find target section
        const targetOffsetTop = targetSection.offsetTop; // Get target section's offset from top
  
        window.scrollTo({
          top: targetOffsetTop,
          behavior: 'smooth' // Scroll behavior: smooth
        });
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
    const backToBeginningButton = document.getElementById('back-to-beginning');
  
    // Show back-to-top button when scrolling down
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) { // Show button after scrolling down 300 pixels
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
  
    // Scroll to top when back-to-top button is clicked
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    // Show back-to-beginning button when scrolling down
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) { // Show button after scrolling down 300 pixels
        backToBeginningButton.style.display = 'block';
      } else {
        backToBeginningButton.style.display = 'none';
      }
    });
  
    // Scroll to beginning when back-to-beginning button is clicked
    backToBeginningButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  