        // Typing effect
        const texts = [
          "Full Stack Developer",
          "Open Source Enthusiast",
          "Community Leader",
          "Hacktoberfest Contributor"
      ];
      let textIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      const typingElement = document.querySelector('.typing-text');

      function type() {
          const currentText = texts[textIndex];
          
          if (isDeleting) {
              typingElement.textContent = currentText.substring(0, charIndex - 1);
              charIndex--;
          } else {
              typingElement.textContent = currentText.substring(0, charIndex + 1);
              charIndex++;
          }

          if (!isDeleting && charIndex === currentText.length) {
              isDeleting = true;
              setTimeout(type, 2000);
          } else if (isDeleting && charIndex === 0) {
              isDeleting = false;
              textIndex = (textIndex + 1) % texts.length;
              setTimeout(type, 500);
          } else {
              setTimeout(type, isDeleting ? 100 : 200);
          }
      }

      // Start typing effect
      type();

      // Intersection Observer for scroll animations
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('animate-fadeInUp');
              }
          });
      }, { threshold: 0.1 });

      document.querySelectorAll('.project-card, .award-item, .stat-card, .recommendation-card').forEach(el => {
          observer.observe(el);
      });
      const filterButtons = document.querySelectorAll('.filter-btn');
      const galleryItems = document.querySelectorAll('.gallery-item');

      filterButtons.forEach(button => {
          button.addEventListener('click', () => {
              // Remove active class from all buttons
              filterButtons.forEach(btn => btn.classList.remove('active'));
              button.classList.add('active');

              const filter = button.getAttribute('data-filter');
              
              galleryItems.forEach(item => {
                  if (filter === 'all' || item.getAttribute('data-category') === filter) {
                      item.style.display = 'block';
                  } else {
                      item.style.display = 'none';
                  }
              });
          });
      });

      // Modal functionality
      const modal = document.querySelector('.modal');
      const modalImg = modal.querySelector('img');
      const modalCaption = modal.querySelector('.modal-caption');
      const modalClose = modal.querySelector('.modal-close');

      galleryItems.forEach(item => {
          item.addEventListener('click', () => {
              const img = item.querySelector('img');
              const caption = item.querySelector('.gallery-caption').innerHTML;
              
              modalImg.src = img.src;
              modalCaption.innerHTML = caption;
              modal.classList.add('active');
          });
      });

      modalClose.addEventListener('click', () => {
          modal.classList.remove('active');
      });

      modal.addEventListener('click', (e) => {
          if (e.target === modal) {
              modal.classList.remove('active');
          }
      });

      // Animation on scroll for gallery items
      const galleryObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('animate-fadeInUp');
              }
          });
      }, { threshold: 0.1 });

      galleryItems.forEach(item => {
          galleryObserver.observe(item);
      });
      function checkScroll() {
        const items = document.querySelectorAll('.timeline-item');
        
        items.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight * 0.8;
            
            if (itemTop < triggerBottom) {
                item.classList.add('visible');
            }
        });
    }

    // Add a small delay for initial animation
    setTimeout(() => {
        checkScroll();
    }, 200);

    // Check on scroll with smooth performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                checkScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    window.addEventListener('resize', checkScroll);