// var x = document.getElementById('email-login').value;
// document.getElementById('email-dashboard').innerHTML = x;


// Cookies.set("email", document.getElementById('email-login').value, { expires: 2 });

// var myCookieEmail = Cookies.get('email');
// console.log(myCookie);



// window.addEventListener('load', () => {

//         const params = (new URL(document.location)).searchParams;
//         const email = params.get('email');

//         document.getElementById('email-dashboard').innerHTML = email;

// })



function handleSubmit () {
    const email = document.getElementById('email-login').value;

    localStorage.setItem("EMAIL", email);

    return;
};