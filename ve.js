document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('Qf2zt2CzF2gNHqwBj'); // Initialize EmailJS with your public key

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Send email
        emailjs.send('service_ozu49qc', 'template_3772706', {
            from_name: name,
            from_email: email,
            message: message
        })
        .then(function(response) {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset(); // Reset form after submission
        }, function(error) {
            alert('Failed to send message. Please try again later.');
            console.error('EmailJS Error:', error);
        });
    });
});
