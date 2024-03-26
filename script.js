// Function to validate the captcha
function validateCaptcha() {
    var userInput = document.getElementById("captchaInput").value; // Get user input
    var expectedCaptcha = "12345"; // Replace "12345" with the expected captcha value

    // Check if user input matches the expected captcha
    if (userInput === expectedCaptcha) {
        alert("Captcha validation successful!"); // If match, show success message
    } else {
        alert("Incorrect captcha. Please try again."); // If no match, show error message
    }
}
 
document.addEventListener("DOMContentLoaded", function() {
    const yearElement = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});
