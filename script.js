document.addEventListener('DOMContentLoaded', function() {
  // Sidebar functionality
  const menuTrigger = document.getElementById('menuTrigger');
  const closeBtn = document.getElementById('closeBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  
  
  menuTrigger.addEventListener('click', function() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
  });
  
 
  closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  });
  

  overlay.addEventListener('click', function() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  });
  
 
  const prevBtn = document.querySelector('.hero-nav .prev');
  const nextBtn = document.querySelector('.hero-nav .next');
  const heroSlides = [
    {
      title: "LOFT<br>МЕБЕЛЬ",
      description: "Современная и удобная мебель в Анапе",
      image: "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "МОДЕРН<br>КОЛЛЕКЦИЯ",
      description: "Стильные решения для вашего интерьера",
      image: "https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "МИНИМАЛИЗМ<br>И КОМФОРТ",
      description: "Функциональность и элегантность",
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];
  
  let currentSlide = 0;
  
  function updateSlide() {
    const heroText = document.querySelector('.hero-text h1');
    const heroDescription = document.querySelector('.hero-text p');
    const heroImage = document.querySelector('.hero-image img');
    
    heroText.innerHTML = heroSlides[currentSlide].title;
    heroDescription.textContent = heroSlides[currentSlide].description;
    heroImage.src = heroSlides[currentSlide].image;
    heroImage.alt = heroSlides[currentSlide].title;
  }
  
  
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', function() {
      currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
      updateSlide();
    });
    
    nextBtn.addEventListener('click', function() {
      currentSlide = (currentSlide + 1) % heroSlides.length;
      updateSlide();
    });
  }
  

  setInterval(function() {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    updateSlide();
  }, 5000);
  
  
  const favoriteButtons = document.querySelectorAll('.product-favorite svg');
  
  favoriteButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      this.classList.toggle('active');
    
      if (this.classList.contains('active')) {
        this.setAttribute('fill', 'red');
      } else {
        this.setAttribute('fill', 'none');
      }
    });
  });
  

  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    card.addEventListener('click', function() {
      const productTitle = this.querySelector('.product-title').textContent;
      console.log(`Viewing details for: ${productTitle}`);
     
    });
  });
});