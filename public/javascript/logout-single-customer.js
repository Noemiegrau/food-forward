async function logoutsinglecustomer() {
    const response = await fetch('/api/staff/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/welcome-page');
    } else {
      alert(response.statusText);
    }
  }
  
  // document.querySelector('#logout-dashboard').addEventListener('click', logout);
  document.getElementById('logout-single-customer').addEventListener('click', logoutsinglecustomer);