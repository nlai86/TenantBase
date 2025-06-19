document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');
  
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
      
      // Update aria-expanded for accessibility
      const isExpanded = mainNav.classList.contains('active');
      mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
    });
    
    // Close mobile menu when clicking nav links
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileMenuBtn.contains(e.target) && !mainNav.contains(e.target)) {
        mainNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Enhanced search tenant functionality
  function searchTenant() {
    const input = document.getElementById('tenantSearch');
    const searchValue = input.value.trim();
    
    if (searchValue) {
      // Add loading state
      const searchBtn = document.getElementById('searchBtn');
      const originalText = searchBtn.textContent;
      searchBtn.textContent = 'Searching...';
      searchBtn.disabled = true;
      searchBtn.style.opacity = '0.7';
      
      // Simulate search delay
      setTimeout(() => {
        alert(`Searching for tenant: "${searchValue}"\n\nIn a real application, this would redirect to search results.`);
        searchBtn.textContent = originalText;
        searchBtn.disabled = false;
        searchBtn.style.opacity = '1';
      }, 1000);
    } else {
      // Focus the input and show validation
      input.focus();
      input.style.borderColor = '#ef4444';
      input.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
      setTimeout(() => {
        input.style.borderColor = '';
        input.style.boxShadow = '';
      }, 2000);
      alert('Please enter a tenant name to search.');
    }
  }

  // Add event listener to search button
  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn) {
    searchBtn.addEventListener('click', searchTenant);
  }

  // Allow Enter key to trigger search
  const searchInput = document.getElementById('tenantSearch');
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        searchTenant();
      }
    });
    
    // Clear error styling on input
    searchInput.addEventListener('input', function() {
      this.style.borderColor = '';
      this.style.boxShadow = '';
    });
  }

  // Sample report button functionality
  const sampleReportBtn = document.querySelector('.secondary');
  if (sampleReportBtn) {
    sampleReportBtn.addEventListener('click', function() {
      alert('Sample Report\n\n📊 Credit Score: 720\n🏠 Previous Rentals: 3\n⚖️ Legal Issues: None\n💰 Income Verification: Confirmed\n\nThis is a preview of our comprehensive tenant reports.');
    });
  }

  // Modal functionality
  const loginModal = document.getElementById('loginModal');
  const signupModal = document.getElementById('signupModal');
  const loginLink = document.querySelector('nav a[href="#login"]');
  const signupLink = document.querySelector('nav a[href="#signup"]');
  const closeButtons = document.querySelectorAll('.close');
  const switchToSignup = document.getElementById('switchToSignup');
  const switchToLogin = document.getElementById('switchToLogin');

  // Function to open modal
  function openModal(modal) {
    if (modal) {
      modal.style.display = 'block';
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      // Focus first input in modal
      const firstInput = modal.querySelector('input');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
      }
    }
  }

  // Function to close modal
  function closeModal(modal) {
    if (modal) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = 'auto';
    }
  }

  // Open login modal
  if (loginLink) {
    loginLink.addEventListener('click', function(e) {
      e.preventDefault();
      openModal(loginModal);
    });
  }

  // Open signup modal
  if (signupLink) {
    signupLink.addEventListener('click', function(e) {
      e.preventDefault();
      openModal(signupModal);
    });
  }

  // Close modals
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      closeModal(modal);
    });
  });

  // Close modal when clicking outside
  window.addEventListener('click', function(e) {
    if (e.target === loginModal) {
      closeModal(loginModal);
    }
    if (e.target === signupModal) {
      closeModal(signupModal);
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal(loginModal);
      closeModal(signupModal);
    }
  });

  // Switch between modals
  if (switchToSignup) {
    switchToSignup.addEventListener('click', function(e) {
      e.preventDefault();
      closeModal(loginModal);
      openModal(signupModal);
    });
  }

  if (switchToLogin) {
    switchToLogin.addEventListener('click', function(e) {
      e.preventDefault();
      closeModal(signupModal);
      openModal(loginModal);
    });
  }

  // Handle form submissions
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      
      // Basic validation
      if (!email || !password) {
        alert('Please fill in all fields.');
        return;
      }
      
      // Simulate login process
      const submitBtn = this.querySelector('.modal-btn');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Signing In...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        alert(`Welcome back! Login successful for: ${email}`);
        closeModal(loginModal);
        loginForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1000);
    });
  }

  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('signupName').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
      const confirmPassword = document.getElementById('signupConfirmPassword').value;
      
      // Basic validation
      if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
      }
      
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      
      if (password.length < 6) {
        alert('Password must be at least 6 characters long!');
        return;
      }
      
      // Simulate signup process
      const submitBtn = this.querySelector('.modal-btn');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Creating Account...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        alert(`Account created successfully! Welcome to TenantBase, ${name}!`);
        closeModal(signupModal);
        signupForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1000);
    });
  }

  // Smooth scroll animation for navbar links (excluding login/signup)
  const navLinks = document.querySelectorAll('nav a[href^="#"]:not([href="#login"]):not([href="#signup"])');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Calculate offset for sticky header
        const headerHeight = document.querySelector('header').offsetHeight;
        const offsetTop = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Active nav link highlighting
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section, .hero');
    const navLinksList = document.querySelectorAll('nav a[href^="#"]:not([href="#login"]):not([href="#signup"])');
    
    let current = '';
    const headerHeight = document.querySelector('header').offsetHeight;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerHeight - 50;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinksList.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  // Throttled scroll event listener for performance
  let ticking = false;
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateActiveNavLink);
      ticking = true;
    }
  }

  window.addEventListener('scroll', function() {
    requestTick();
    ticking = false;
  });

  // Header scroll effect
  let lastScrollTop = 0;
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add/remove shadow based on scroll position
    if (scrollTop > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
  });

  // Intersection Observer for animations
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.step, .section h2');
    animateElements.forEach(el => {
      observer.observe(el);
    });
  }

  // Performance optimization: Debounce window resize
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      // Handle any resize-specific logic here
      updateActiveNavLink();
    }, 150);
  });
});