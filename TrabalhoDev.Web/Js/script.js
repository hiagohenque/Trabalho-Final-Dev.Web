const toggleBtn = document.getElementById('toggleMenu');

toggleBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.body.classList.toggle('Menu-expanded');
});