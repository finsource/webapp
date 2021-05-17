window.onload = (() => {

    var output = document.getElementById("main-content");

    output.innerHTML =
   `<img class = "main-image" src = "../Media/help_and_support.svg"></img>
    
    <table class = "support-table" id = "support-table">
        <tr>
            <td>For website related queries</td>
            <td><a href = "https://github.com/finsource/webapp">Send us a pull request.</a></td>
        </tr>

        <tr>
            <td>Aditya Sharma</td>
            <td><a href = "https://github.com/adityasharma3">Github</a></td>
        </tr>

        <tr>
            <td>Keshav Yadav</td>
            <td><a href = "https://github.com/kecav">Github</a></td>
        </tr>
        
        <tr>
            <td>API's used</td>
            <td>All api's used are listed on repo's readme file on github.</td>
        </tr>

        <tr>
            <td>For further queries</td>
            <td>+91 9844444277 & +91 9930474703</td>
        </tr>

    </table>`

    var table = document.getElementById('support-table');
    output.style.display = "flex";
    table.style.margin = "1em";
    output.style.transition = "0.1s ease";
});