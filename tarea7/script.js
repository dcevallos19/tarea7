document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
  
    registerForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(registerForm);
      const formObject = {};
      formData.forEach((value, key) => formObject[key] = value);
      console.log(formObject); // Aquí puedes enviar los datos al servidor
      registerForm.reset();
    });
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(loginForm);
      const formObject = {};
      formData.forEach((value, key) => formObject[key] = value);
      console.log(formObject); // Aquí puedes enviar los datos al servidor
      loginForm.reset();
    });
  });
  