/* ========================================
   DESPEDIDA SIMPLE - Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  
  // ===== Update Current Date =====
  function updateCurrentDate() {
    const now = new Date();
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const dateText = `${month} ${year}`;
    
    // Actualizar todos los elementos con fecha
    const dateElements = document.querySelectorAll('#current-date, .current-date');
    dateElements.forEach(element => {
      element.textContent = dateText;
    });
  }
  
  updateCurrentDate();
  
  // ===== Scroll Progress Bar =====
  const scrollProgress = document.querySelector('.scroll-progress');
  
  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    if (scrollProgress) {
      scrollProgress.style.width = scrollPercent + '%';
    }
  }
  
  // ===== Navbar Scroll Effect =====
  const navbar = document.querySelector('.navbar');
  
  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  }
  
  // ===== Reveal on Scroll =====
  const revealElements = document.querySelectorAll('.reveal');
  
  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;
    
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  }
  
  // ===== FAQ Accordion =====
  const faqItems = document.querySelectorAll('.faq__item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    
    question.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });
  
  // ===== Smooth Scroll for Anchor Links =====
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // ===== Throttle Function for Performance =====
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }
  
  // ===== Event Listeners =====
  window.addEventListener('scroll', throttle(function() {
    updateScrollProgress();
    handleNavbarScroll();
    revealOnScroll();
  }, 10));
  
  // Initial calls
  updateScrollProgress();
  handleNavbarScroll();
  revealOnScroll();
  
  // ===== Phone Number Click Tracking =====
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  
  phoneLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Google Analytics event (if gtag is available)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          'event_category': 'Contact',
          'event_label': 'Phone Call'
        });
      }
    });
  });
  
  // ===== WhatsApp Click Tracking =====
  const waLinks = document.querySelectorAll('a[href*="wa.me"]');
  
  waLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Google Analytics event (if gtag is available)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          'event_category': 'Contact',
          'event_label': 'WhatsApp'
        });
      }
    });
  });
  
  // ===== Lazy Load Images (if needed) =====
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
    });
  }
  
  // ===== Console Easter Egg =====
  console.log('%c🕊️ Despedida Simple', 'font-size: 24px; font-weight: bold; color: #1C1917;');
  console.log('%cServicio de cremación directa - Buenos Aires', 'font-size: 14px; color: #57534E;');
  console.log('%c📞 11 3313-1536 | WhatsApp 24hs', 'font-size: 12px; color: #25D366;');
  
});

// ===== Preload Critical Resources =====
(function() {
  // Preload fonts
  const fontPreloads = [
    'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
  ];
  
  fontPreloads.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    document.head.appendChild(link);
  });
})();
