document.addEventListener("DOMContentLoaded", function () {
   // Function to handle smooth scrolling
   function scrollToSection(sectionId) {
      const section = document.querySelector(sectionId);
      if (section) {
         const sectionOffset = section.offsetTop;
         window.scrollTo({
            top: sectionOffset,
            behavior: "smooth"
         });
      }
   }

   // Function to scroll back to the top of the page
   function scrollToTop() {
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      });
   }

   // Get the navigation links
   const adoptLink = document.querySelector('a[href="adopt.html"]');
   const wishlistLink = document.querySelector('a[href="wishlist.html"]');
   const donateLink = document.querySelector('a[href="donate.html"]'); // Update the donateLink selector
   const donateButton = document.querySelector('#donate-button');

   // Add click event listeners to the links
   if (adoptLink) {
      adoptLink.addEventListener("click", function (event) {
         event.preventDefault();
         scrollToSection(".adopt");
      });
   }

   if (wishlistLink) {
      wishlistLink.addEventListener("click", function (event) {
         event.preventDefault();
         scrollToSection(".wish-title");
      });
   }

   if (donateLink) {
      donateLink.addEventListener("click", function (event) {
         event.preventDefault();
         scrollToSection(".form-title"); // Update the sectionId to match your donate form section
      });
   }
 // Get all "Back to Top" buttons on the page
 const backToTopButtons = document.querySelectorAll(".back-to-top");

 // Add click event listeners to all "Back to Top" buttons
 backToTopButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
       event.preventDefault();
       scrollToTop();
    });
 });
   
   // Add click event listener to the Donate Now button
   if (donateButton) {
      donateButton.addEventListener("click", function () {
         scrollToSection("#donate"); // Update the sectionId to match your donate form section
      });
   }
});






