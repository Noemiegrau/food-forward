// update customer
async function updateCustomerHandler(event) {
  event.preventDefault();

  const customer_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const first_name = document.querySelector('#first-name-upco').value.trim();
  const last_name = document.querySelector('#last-name-upco').value.trim();
  const age = document.querySelector('#age-upco').value.trim();
  const household = document.querySelector('#household-upco').value.trim();
  const package = document.querySelector('#package-upco').value.trim();
  const date_received = document.querySelector('#date-upco').value.trim();

  const response = await fetch('/single-customer/' + customer_id, {
    method: 'PUT',
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
    document.getElementById('alert-update').classList.remove('hide');
    document.getElementById("main-container").classList.add("blur");
    document.getElementById('alert-update').classList.add('first-plan');
    document.getElementById("main-container").classList.add("second-plan");
  } else {
    alert(response.statusText);
  }

// Event listener for delete button on modal
document.getElementById("delete-btn").addEventListener("click", function() {
  document.getElementById('alert-update').classList.add('hide');
  document.getElementById("main-container").classList.remove("blur");
  document.location.reload();
});

}

document.querySelector('.login-form-2').addEventListener('submit', updateCustomerHandler);

// delete customer
async function deleteCustomer(event) {
    event.preventDefault();

    const customer_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    const response = await fetch('/single-customer/' + customer_id, {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.getElementById('alert-delete').classList.remove('hide');
      document.getElementById("main-container").classList.add("blur");
      document.getElementById('alert-delete').classList.add('first-plan');
      document.getElementById("main-container").classList.add("second-plan");
      // document.location.replace('/allCustomer');
    } else {
      alert(response.statusText);
    }

// Event listener for delete button on modal
  document.getElementById("delete-btn-delete").addEventListener("click", function() {
  document.getElementById('alert-delete').classList.add('hide');
  document.getElementById("main-container").classList.remove("blur");
  document.location.replace('/allCustomer');
});

}
  
document.querySelector('#delete-single-customer').addEventListener('click', deleteCustomer);