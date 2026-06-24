function openModal(imageSrc) {
  var modal = document.getElementById('imageModal');
  var modalImg = document.getElementById('modalImage');
  modal.style.display = 'block';
  modalImg.src = imageSrc;
}

function closeModal() {
  var modal = document.getElementById('imageModal');
  modal.style.display = 'none';
}

// Add event listeners to all certificate View buttons (for accessibility)
document.addEventListener('DOMContentLoaded', function() {
  // Certificate modal functionality
  var certCards = document.querySelectorAll('.certificate-card');
  certCards.forEach(function(card) {
    var btn = card.querySelector('.btn');
    var img = card.querySelector('img');
    if (img) {
      card.addEventListener('click', function() {
        openModal(img.src);
      });
    }
    if (btn && img) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        openModal(img.src);
      });
    }
  });
  
  // Ensure project links work properly
  var projectLinks = document.querySelectorAll('.project-card .btn[href]');
  projectLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      // Allow default behavior for external links
      if (this.getAttribute('href').startsWith('http')) {
        // Don't prevent default - let it open normally
        return true;
      }
    });
  });
  
  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  console.log('Hamburger found:', hamburger);
  console.log('Nav links found:', navLinks);
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Hamburger clicked!');
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
      console.log('Nav links classes:', navLinks.className);
      console.log('Hamburger classes:', hamburger.className);
    });
    
    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  } else {
    console.error('Hamburger or nav links not found');
  }
});

// Add click event to all nav items
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        // Remove 'active' class from all items
        document.querySelectorAll('.nav-item').forEach(navItem => {
            navItem.classList.remove('active');
        });
        // Add 'active' class to clicked item
        this.classList.add('active');
    });
});