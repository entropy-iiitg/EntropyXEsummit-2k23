const backToTopButton = document.getElementById("back-to-top");


window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});


backToTopButton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
});








  
const divs = document.querySelectorAll('.wrapper');
let currentIndex = 0;
let isScrolling = false; 


function scrollToNextDiv() {
    if (currentIndex < divs.length - 1) {
        currentIndex++;
        divs[currentIndex].scrollIntoView({ behavior: 'smooth' });
    }
}


const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && isScrolling === true) {
            scrollToNextDiv();
        }
    });
}, { threshold: 0.5 });


divs.forEach((div) => {
    intersectionObserver.observe(div);
});


window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {

        isScrolling = true;
        scrollToNextDiv();
    }
});



// const hamburger= document.querySelector(".hamburger");
// const navMenu= document.querySelector(".nav-menu");


// hamburger.addEventListener("click",() =>
// {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }))



  // JavaScript for toggling the mobile menu
  const menuButton = document.querySelector(".menu-button");
  const navLinks = document.querySelector(".nav-menu");

  menuButton.addEventListener("click", () => {
      navLinks.classList.toggle("active");
  });


// const button = document.getElementById('button1');
// const link= document.getElementById('myLink');

// button.addEventListener('click',function() {
//     window.location.href= 'events1.html';
// });

// const button = document.getElementById('button1');
// button.addEventListener('click', function () {
//     // Navigate to the events1.html page with the appropriate URL parameter
//     window.location.href = 'events1.html?show=div1'; // Modify as needed
// });


// const button1 = document.getElementById('button2');
// button1.addEventListener('click', function () {
//     // Navigate to the events1.html page with the appropriate URL parameter
//     window.location.href = 'events1.html?show=div2'; // Modify as needed
// });


// Get references to all buttons with the class 'view-more-button'
const buttons = document.querySelectorAll('.view-more-button');

// Add click event listeners to each button
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Get the data-target attribute to determine which div to show
        const targetDivId = button.getAttribute('data-target');
        
        // Navigate to the events1.html page with the appropriate URL parameter
        window.location.href = `events1.html?show=${targetDivId}`;
    });
});
