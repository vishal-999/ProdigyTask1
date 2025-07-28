// Get the navigation bar element
const navbar = document.getElementById('navbar');

// Add a scroll event listener to the window
window.addEventListener('scroll', function () {
  // If the scroll position is more than 50 pixels
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled'); // Add the 'scrolled' class to change color
  } else {
    navbar.classList.remove('scrolled'); // Remove the class when at top
  }
});
