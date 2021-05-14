console.log('contact.js');

document.getElementById('submit').addEventListener('click' , (e) => {

    e.preventDefault();

    if (document.getElementById('name-input').value === '') {
        document.getElementById('name-input').style.background = "rgba(200,0,0,0.2)";
    }

    if (document.getElementById('email-input').value === '') {
        document.getElementById('email-input').style.background = "rgba(200,0,0,0.2)";
    }

    if (document.getElementById('phone-input').value === '') {
        document.getElementById('phone-input').style.background = "rgba(200,0,0,0.2)";
    }
});

document.getElementById('email-input').addEventListener( 'keyup', () => {
    document.getElementById('email-input').style.background = "white";
    document.getElementById('email-input').style.transition = "0.2s ease";
});

document.getElementById('name-input').addEventListener( 'keyup', () => {
    document.getElementById('name-input').style.background = "white";
    document.getElementById('name-input').style.transition = "0.2s ease";
});

document.getElementById('phone-input').addEventListener( 'keyup', () => {
    document.getElementById('phone-input').style.background = "white";
    document.getElementById('phone-input').style.transition = "0.2s ease";
});