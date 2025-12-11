document.querySelector('.order-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the browser's default form submission (which caused the error)

    // 1. Get the values from the form fields
    const service = document.getElementById('service').value;
    const platform = document.getElementById('platform').value;
    const username = document.getElementById('username').value;
    
    // 2. Construct the message for WhatsApp
    // The message includes all the details you need for the order
    const message = `Hello! I would like to place an order for a boost service. 
Service Selected: ${service}
Platform: ${platform}
Username/Link: ${username}
I have already made the transfer and will send proof of payment now. Thank you!`;
    
    // 3. Encode the message to be safe in a URL
    const encodedMessage = encodeURIComponent(message);
    
    // 4. Build the final, reliable WhatsApp URL
    const whatsappURL = `https://wa.me/2347076483717?text=${encodedMessage}`;
    
    // 5. Redirect the user in a new tab
    window.open(whatsappURL, '_blank');
});
