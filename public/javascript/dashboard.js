// async function dashboardButton() {
//     const response = await fetch('/api/staff/:id', {
//       method: 'get',
//       headers: { 'Content-Type': 'application/json' }
//     });
  
//     if (response.ok) {
//       document.location.replace('/dashboard/' + req.session.staff_id);
//     } else {
//       alert(response.statusText);
//     }
//   }
  
//   document.querySelector('#dashboard-button').addEventListener('click', dashboardButton);