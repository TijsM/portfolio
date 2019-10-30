window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('in sending mail')

       
        emailjs.sendForm('gmail', 'contact_form', this);



        let notification = document.getElementById('mailConfirmation');
        console.log(notification);
        notification.style.display = 'block';

        document.getElementById('mail').value= '';
        document.getElementById('name').value= '';
        document.getElementById('content').value= '';

        setTimeout(() => {
            notification.style.display = 'none';
        }, 5000);
    });
}