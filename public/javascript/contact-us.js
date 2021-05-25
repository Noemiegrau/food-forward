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

//     // .then(response => res.json(response))
//     // .catch(err => {
//     //   console.log(err);
//     //   res.status(500).json(err);
//     // });
};



// cf nodemailer tutorial at https://github.com/victoria-lo/Nodemailer-Tutorial