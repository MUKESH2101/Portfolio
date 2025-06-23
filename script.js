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
  var certCards = document.querySelectorAll('.certificate-card');
  certCards.forEach(function(card) {
    var btn = card.querySelector('.btn');
    var img = card.querySelector('img');
    if (btn && img) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        openModal(img.getAttribute('src'));
      });
    }
  });
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