function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (email && password) {
    message.style.color = "#4B164C";
    message.textContent = "Login successful! Redirecting...";
    
    setTimeout(() => {
      window.location.href = "https://mail.google.com";
    }, 1500);
  } else {
    message.style.color = "red";
    message.textContent = "Please enter a valid email and password.";
  }
}

