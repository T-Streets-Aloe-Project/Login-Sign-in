document.getElementById('SignupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'home.html';
  
});
document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'home.html';
  
});
let fname = document.getElementById('Fname').value;
let lname = document.getElementById('Lname').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;