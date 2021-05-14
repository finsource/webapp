// const app = express();

// const dataStore = require('nedb');
// const database = new dataStore('../data/database.db');

// database.loadDatabase();

// window.document.getElementById('submit').addEventListener('click' , () => {
//     const name = document.getElementById('name_input').value;
//     const email = document.getElementById('email-input').value;
//     const phone = document.getElementById('phone-input').value;

//     database.insert(`{name : ${name} , email : ${email} , phone : ${phone}}`);
// });

function send_data() {
    const name = document.getElementById('name_input').value;
    const email = document.getElementById('email-input').value;
    const phone = document.getElementById('phone-input').value;

    var httpr = new XMLHttpRequest();
    httpr.open("POST" , "../php/main.php" , true);
    httpr.setRequestHeader('content-type' , 'application');

    httpr.onreadystatechange = function() {
        if (httpr.readyState == 4 && httpr.status == 200) {
            alert('data sent to database!');
        }
    };

    httpr.send('name =' + name + "email =" + email + "phone = " + phone);
}