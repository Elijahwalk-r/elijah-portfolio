console.log('Hey there! Thanks for checking out my portfolio. You know what would be even better... Hiring me :)')

// 1.Create name space Object
const portfolioApp = {};

// 2. create init method
portfolioApp.init = () => {
    // 16. call our methods
    portfolioApp.eventStarter();
    portfolioApp.showSlides(portfolioApp.slideIndex);
    portfolioApp.update();
    portfolioApp.navigate();
}

// global variables
const labelEl = document.getElementsByClassName('showMe')[0];
const anchorEl = document.getElementsByClassName('menu')
const checkboxEl = document.querySelector("input[type=checkbox]");
const ulEl = document.getElementsByClassName('slideOut')[0];

// START CAROUSEL JS
// 4. put slideIndex as a variable of the number 1
portfolioApp.slideIndex = 1;

// 5. created a method that will act as the change in slides and give it a parameter.
portfolioApp.plusSlides = function (n) {
    //11.  call for loop & if conditional function 
    portfolioApp.showSlides(portfolioApp.slideIndex += n);
}

// 6. create a method that will take a for loop and conditional statement to identify how the images change. 
portfolioApp.showSlides = function (n) {
    // 7. Target our slide show
    let slides = document.querySelectorAll(".slideShow");

    // 8. create a for loop that will look at the total amount of slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // 9. an if else conditional statement that will choose to show or not show the image
    if (n > slides.length) {
        portfolioApp.slideIndex = 1;
    }
    else if (n < 1) {
        portfolioApp.slideIndex = slides.length;
    }
    // 10. show picture giving the targeted element a display of block
    slides[portfolioApp.slideIndex - 1].style.display = "block";
}

//12.  Event listener on our buttons that call the function for change in slides.
portfolioApp.eventStarter = function () {
    // 13. target the element button we want to go next
    document.querySelector('.next').addEventListener('click', function () {
        portfolioApp.plusSlides(1);
    })
    // 14. target the element button we want to go previous
    document.querySelector('.prev').addEventListener('click', function () {
        portfolioApp.plusSlides(-1);
    })
};
// END CAROUSEL JS

// START HAMBURGER MENU CHANGE JS

portfolioApp.update = () => {
    labelEl.addEventListener('click', function(e){
    portfolioApp.toggle(labelEl)
});
}

portfolioApp.toggle = (element) => {
    element.classList.toggle('fa-x');
    element.classList.toggle('fa-bars');
}
// END HAMBURGER MENU CHANGE JS

// START NAV LINKS JS
portfolioApp.navigate = () => {
    for (item of anchorEl){
        item.addEventListener('click', function(e){
            portfolioApp.navClose(item)
        })
    }
}

portfolioApp.navClose = (e) => {
   checkboxEl.checked = false
   labelEl.classList.toggle('fa-x');
   labelEl.classList.toggle('fa-bars');
}
// END NAV LINKS JS


portfolioApp.reveal = () => {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", portfolioApp.reveal);



// call init method
portfolioApp.init();
