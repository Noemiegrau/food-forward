async function newFormHandler(event) {
    event.preventDefault();
  
    const post_text = document.querySelector('input[name="post_text"]').value;
  
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        post_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.getElementById('alert').classList.remove('hide');
      document.getElementById("main-container").classList.add("blur");
      document.getElementById('alert').classList.add('first-plan');
      document.getElementById("main-container").classList.add("second-plan");
      document.getElementById("create-post").classList.add("second-plan");
      console.log('bravo');
    } else {
      alert(response.statusText);
    }

  // Event listener for delete button on modal
  document.getElementById("delete-btn").addEventListener("click", function() {
    document.getElementById('alert').classList.add('hide');
    document.getElementById("main-container").classList.remove("blur");
    document.location.replace('/chat');
  });
}

// TESTS DONE FOR ALERT MESSAGE AND BLUR EFFECT 
//add bootstrap alert message
// document.getElementById('alert').classList.remove('hide');

// Event listener for post button button on modal
// document.getElementById("post-post-btn").addEventListener("click", function() {
//   document.getElementById('alert').classList.remove('hide');
// });

// Event listener for delete button on modal
// document.getElementById("delete-btn").addEventListener("click", function() {
//   document.getElementById('alert').classList.add('hide');
// });


  //remove bootstrap alert message
  // document.getElementById('alert').classList.add('hide');
  
  //add bootstrap alert message
  // document.getElementById('alert').classList.remove('hide');

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);