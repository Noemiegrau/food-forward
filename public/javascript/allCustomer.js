async function newFormHandler(event) {
    event.preventDefault();
  
    const first_name = document.querySelector('input[name="first_name"]').value;
    const last_name = document.querySelector('input[name="last_name"]').value;
    const age = document.querySelector('input[name="age"]').value;
    const household = document.querySelector('input[name="household"]').value;
    const package = document.querySelector('input[name="package"]').value;
    const date_received = document.querySelector('input[name="date_received"]').value;

  
    const response = await fetch(`/api/customers`, {
      method: 'POST',
      body: JSON.stringify({
        first_name,
        last_name,
        age,
        household,
        package,
        date_received
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.getElementById('alert-add').classList.remove('hide');
      document.getElementById("main-container").classList.add("blur");
      document.getElementById('alert-add').classList.add('first-plan');
      document.getElementById("main-container").classList.add("second-plan");
    } else {
      alert(response.statusText);
    }

    document.getElementById("delete-btn-add").addEventListener("click", function() {
      document.getElementById('alert-add').classList.add('hide');
      document.getElementById("main-container").classList.remove("blur");
      document.location.reload();
    });

  }
  
  document.querySelector('.new-customer-form').addEventListener('submit', newFormHandler);