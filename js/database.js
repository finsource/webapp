const app = express();

const dataStore = require('nedb');
const database = new dataStore('../data/database.db');

database.loadDatabase();

window.document.getElementById('submit').addEventListener('click' , () => {
    const name = document.getElementById('name_input').value;
    const email = document.getElementById('email-input').value;
    const phone = document.getElementById('phone-input').value;

    database.insert(`{name : ${name} , email : ${email} , phone : ${phone}}`);
});