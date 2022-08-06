// PSEUDO CODE A.
    // change the hamburger menu icon to an X when user clicks to signify they need to close the X
        // grab the elements affected by the change and place into variables
        // create a function to handle users click in an event listener
        // create a function that will handle the icon toggle 

// A1. Store my elements into variables
const labelEl = document.getElementById('toggle');
const iconEl = document.getElementById('switchToX');
// A2. Create a function that will handle the event listener on users click
const change = function() {
    labelEl.addEventListener('click', function () {
        //A5. Call my toggle function within the event listener
        hamburgerToX()
});
}
// A3. Create a function that will handle the toggle between icons from one to the other
const hamburgerToX = () => {
    iconEl.classList.toggle('fa-bars')
    iconEl.classList.toggle('fa-x')
}
// A6. Call my event listener 
change();

// const contactForm = document.querySelector('li');

// contactForm.addEventListener('click', function(e){
//     e.preventDefault();
// })