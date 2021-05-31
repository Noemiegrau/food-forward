//  get the form by it's id
const form = document.getElementById("contact-form");

// addEventListener (function sendMail) on click to submit
const formEvent = form.addEventListener("submit", (event) => {
    event.preventDefault();

    let mail = new FormData(form);
    sendMail(mail);
});
 
// 
const sendMail = (mail) => {
    fetch("https://stark-reaches-12893.herokuapp.com/contact-us/send", {
    // fetch("http://localhost:3000/contact-us/send", {
        method: "POST",
        body: mail,

    })
    
    .then((response) => {
        return response.json();
    });

  //add bootstrap modal
  //window.alert("Email sent successfully.");


//     // .then(response => res.json(response))
//     // .catch(err => {
//     //   console.log(err);
//     //   res.status(500).json(err);
//     // });
};

// cf nodemailer tutorial at https://github.com/victoria-lo/Nodemailer-Tutorial


// Event listener to make alert message appear
document.getElementById("submit-contact-btn").addEventListener("click", function() {
    document.getElementById('alert').classList.remove('hide');
    document.getElementById("main-container").classList.add("blur");
    document.getElementById('alert').classList.add('first-plan');
    document.getElementById("main-container").classList.add("second-plan");
    console.log('bravo');
});

// Event listener for delete button on alert message
document.getElementById("delete-btn").addEventListener("click", function() {
  document.getElementById('alert').classList.add('hide');
  document.getElementById("main-container").classList.remove("blur");
  document.location.replace('/contact-us');
});