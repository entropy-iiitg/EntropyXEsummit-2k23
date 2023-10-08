
var currentPage = window.location.href;


var navLink= document.querySelectorAll('.nav-menu a');

navLink.forEach(function(link) {
    if (link.href === currentPage) {
        link.classList.add('active');
    }
});