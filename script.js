document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.hero-nav .prev');
    const nextButton = document.querySelector('.hero-nav .next');
    
    
    const favoriteIcons = document.querySelectorAll('.product-favorite svg');
    
  
    favoriteIcons.forEach(icon => {
      icon.addEventListener('click', function() {
        this.setAttribute('fill', this.getAttribute('fill') === 'none' ? 'red' : 'none');
      });
    });
    
    
    prevButton.addEventListener('click', function() {
      console.log('Previous slide');
 
    });
    
    nextButton.addEventListener('click', function() {
      console.log('Next slide');
      
    });
  });