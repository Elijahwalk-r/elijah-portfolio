console.log('Hey there! Thanks for checking out my portfolio. You know what would be even better... Hiring me :)')

//  STRETCH GOALS STARTER PAGE //

// 1.Create our name space Object
const portfolioApp = {};

// 2. create our init method
portfolioApp.init = () => {
    // 16. call our methods
    portfolioApp.eventStarter();
    portfolioApp.showSlides(portfolioApp.slideIndex);
}

// 4. put our slideIndex as a variable of the number 1
portfolioApp.slideIndex = 1;

// 5. created a method that will act as the change in slides and give it a parameter.
portfolioApp.plusSlides = function (n) {
    //11.  we call our for loop & if conditional function 
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
    // 10. show our picture giving the targeted element a display of block
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

// call our init method
portfolioApp.init();