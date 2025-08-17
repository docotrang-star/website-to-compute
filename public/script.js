/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");
// Tạo một thông báo khi người dùng click vào link Shopee
const reviewLinks = document.querySelectorAll('.review-item a');

reviewLinks.forEach(link => {
    link.addEventListener('click', () => {
        alert('Cảm ơn bạn đã ghé thăm!');
    });
});
