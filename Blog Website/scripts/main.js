function toggleNavbar() {
   document.querySelector('.navbar').classList.toggle('active');
}

// Select all "Read More" buttons
const readMoreButtons = document.querySelectorAll('.read-more');

// Loop through each button and add a click event listener
readMoreButtons.forEach(button => {
   button.addEventListener('click', function() {
      const blogItem = this.parentElement;
      const fullContent = blogItem.querySelector('.full-content');
      const shortContent = blogItem.querySelector('.short-content');
      
      // Toggle content visibility
      if (fullContent.style.display === 'none') {
         fullContent.style.display = 'block';
         this.textContent = 'Show Less'; // Change button text
      } else {
         fullContent.style.display = 'none';
         this.textContent = 'Read More'; // Change button text back
      }
   });
});
