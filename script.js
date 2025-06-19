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
      
      // Simulate search delay
      setTimeout(() => {
        alert(`Searching for tenant: "${searchValue}"\n\nIn a real application, this would redirect to search results.`);
        searchBtn.textContent = originalText;
        searchBtn.disabled = false;
      }, 1000);
    } else {
      // Focus the input and show validation
      input.focus();
      input.style.borderColor = '#ef4444';
      setTimeout(() => {
        input.style.borderColor = '';
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
      this.style.border