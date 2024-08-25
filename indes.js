
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate username and password
    if (username && password) {
        // Simulate successful login (replace with actual authentication logic)
        localStorage.setItem('userId', username);
        alert('Login successful!');
    } else {
        alert('Please enter both username and password.');
    }
}
function getUserId() {
    const userId = localStorage.getItem('userId');

    if (userId) {
        console.log('User ID:', userId);
    } else {
        console.log('User ID not found in local storage.');
    }
}