
    // Enable dropdowns on hover
    document.querySelectorAll('.navbar .nav-item.dropdown').forEach(function(element) {
      element.addEventListener('mouseover', function() {
        const dropdownMenu = this.querySelector('.dropdown-menu');
        if (dropdownMenu) {
          dropdownMenu.classList.add('show');
        }
      });
      
      element.addEventListener('mouseout', function() {
        const dropdownMenu = this.querySelector('.dropdown-menu');
        if (dropdownMenu) {
          dropdownMenu.classList.remove('show');
        }
      });
    });
    
    // Show close button on mobile screen
    const closeBtn = document.querySelector('.navbar-toggler');
    closeBtn.addEventListener('click', function() {
      const navbarNav = document.querySelector('.navbar-collapse');
      const closeIcon = this.querySelector('.close-icon');
      if (navbarNav.classList.contains('show')) {
        closeIcon.style.display = 'none';
      } else {
        closeIcon.style.display = 'block';
      }
    });
