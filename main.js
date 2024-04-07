// main.js

// Use Helmet middleware
document.addEventListener("DOMContentLoaded", function() {
    const app = document.querySelector("#app");
  
    // Set content security policy using Helmet
helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://example.com"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "https://example.com"],
      fontSrc: ["'self'", "https://fonts.googleapis.com"],
      connectSrc: ["'self'", "https://api.example.com"],
      frameSrc: ["'self'", "https://embed.example.com"],
      mediaSrc: ["'self'", "https://media.example.com"],
      objectSrc: ["'none'"]
    },
  });  
    // Example: Set the title of the document
    document.title = "My Secure Web App";
  });
  