window.addEventListener('load', () => {

        const email = localStorage.getItem('EMAIL');

        document.getElementById('email-dashboard').innerHTML = email;

})