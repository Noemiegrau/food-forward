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

    fetch("https://pacific-brushlands-78868.herokuapp.com/send", {
        method: "post",
        body: mail,

    }).then((response) => {
        return response.json();
    });
};

// cf nodemailer tutorial at https://github.com/victoria-lo/Nodemailer-Tutorial