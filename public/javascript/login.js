async function signupFormHandler(event) {
    event.preventDefault();
  
    const first_name = document.querySelector('#first-name-signup').value.trim();
    const last_name = document.querySelector('#last-name-signup').value.trim();
    const staff_number = document.querySelector('#employee-number-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (first_name && last_name && staff_number && email && password) {
      const response = await fetch('/api/staff', {
        method: 'post',
        body: JSON.stringify({
          first_name,
          last_name, 
          staff_number,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        console.log('success');
      } else {
        alert(response.statusText);
      }
    }
  }

async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('api/staff/login',{
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // check the response status
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
}


document.querySelector(".login-form-1").addEventListener('submit', loginFormHandler);
document.querySelector('.login-form-2').addEventListener('submit', signupFormHandler);