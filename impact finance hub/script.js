const toggleBtn = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    toggleBtn.textContent = mobileMenu.classList.contains('open') ? '✖' : '☰';
});

// Highlight active nav link
const navLinks = document.querySelectorAll('.mobile-menu a');
const currentPage = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');

    if (linkPage === currentPage || (linkPage === 'index.html' && currentPage === '')) {
        link.classList.add('active');
    }
});
