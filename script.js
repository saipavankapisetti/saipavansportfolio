document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Your message has been sent!');
            contactForm.reset();
        });
    }
});
