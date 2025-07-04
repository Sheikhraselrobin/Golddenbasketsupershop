// Sidebar Animation
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menuBtn');
const closeSidebar = document.getElementById('closeSidebar');
const menuLinks = document.querySelectorAll('.menu-link');
const pages = document.querySelectorAll('.page');

// Sidebar Open/Close
menuBtn.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('show');
});
closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
});
overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
});

// Page Routing
function showPage(pageId) {
    pages.forEach(pg => pg.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    menuLinks.forEach(link => link.classList.remove('active'));
    menuLinks.forEach(link => {
        if (link.dataset.page === pageId) link.classList.add('active');
    });
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
}
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showPage(link.dataset.page);
    });
});
showPage('home');

// Theme Switch
const themeSwitch = document.getElementById('themeSwitch');
themeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeSwitch.textContent = document.body.classList.contains('dark') ? '🌙' : '🌞';
});
themeSwitch.textContent = document.body.classList.contains('dark') ? '🌙' : '🌞';

// Language Switch (Demo only, static)
const langSwitch = document.getElementById('langSwitch');
langSwitch.addEventListener('change', (e) => {
    alert('Language switch is a demo. All content can be translated on request.');
});

// Search Functionality (Demo Only)
document.getElementById('searchBtn').addEventListener('click', () => {
    alert('Search feature is a demo in this template.');
});
document.getElementById('searchInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('searchBtn').click();
});

// Cart Remove Demo
document.addEventListener('click', function(e){
    if(e.target.classList.contains('remove-btn')) {
        e.target.closest('tr').remove();
    }
});

// Cart Checkout Demo
if(document.querySelector('.checkout-btn')) {
    document.querySelector('.checkout-btn').addEventListener('click', function() {
        alert('Checkout is a demo in this template.');
    });
}

// Contact Form Demo
if(document.querySelector('.contact-form')){
    document.querySelector('.contact-form').addEventListener('submit', function(e){
        e.preventDefault();
        alert('Message sent (demo mode).');
    });
}