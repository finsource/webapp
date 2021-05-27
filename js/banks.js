async function getData() {
    let ifsc = document.getElementById("ifsc_input").value;

    //alerting the user if they press the submit btn without entering any IFSC code.
    if (ifsc == "") {
        alert("Please enter an IFSC code");
        return;
    }

    const datapoint = `https://ifsc.razorpay.com/${ifsc}`;

    const response = await fetch(datapoint);
    const data = await response.json();

    const output = document.getElementById("output");

    //data will only be displayed if user's input of IFSC code is correct and it exists in our API
    if (data != "Not Found") {
        output.innerHTML =
            `<table class = "output-table" id = "output-table">
            <tr>
                <th>Bank</th>
                <td>${data.BANK}</td>
            </tr>

            <tr>
                <th>Branch</th>
                <td>${data.BRANCH}</td>
            </tr>

            <tr>
                <th>Address</th>
                <td>${data.ADDRESS}</td>
            </tr>

            <tr>
                <th>Centre</th>
                <td>${data.CENTRE}</td>
            </tr>

             <tr>
                <th>City</th>
                <td>${data.CITY}</td>
            </tr>

            <tr>
                <th>District</th>
                <td>${data.DISTRICT}</td>
            </tr>

            <tr>
                <th>Contact</th>
                <td>${data.CONTACT}</td>
            </tr>

            <tr>
                <th>Does it support RTGS?</th>
                <td>${data.RTGS ? "Yes" : "No"}</td>
            </tr>

            <tr>
                <th>Does it support NEFT?</th>
                <td>${data.NEFT ? "Yes" : "No"}</td>
            </tr>

            <tr>
                <th>Does it support IMPS?</th>
                <td>${data.IMPS ? "Yes" : "No"}</td>
            </tr>

            <tr>
                <th>Does it support UPI?</th>
                <td>${data.UPI ? "Yes" : "No"}</td>
            </tr>

        </table>`;
    } else {
        //this is for when a user enters an API which is not available.
        alert("Incorrect ifsc code entered! Please enter correct code again");
    }
}

//calling our main function on submit btn click.
document.getElementById("submit_ifsc").addEventListener("click", getData);

document.getElementById('reset_ifsc').addEventListener('click',() => {
    document.getElementById('ifsc_input').value = "";
});

document.getElementById("search-img").addEventListener("click", () => {
  let search_input = document.getElementById("search-text").value;
  window.open(`https://www.google.com/search?q=${search_input}`);
});

//Briefing the user about the function of this web page.
window.onload = (() => {
    document.getElementById('output').innerHTML = `<p class = "welcome-text" id = "welcome-text">This is the portal where you can enter a bank's IFSC code and get all the information available about the bank.</p>`;
});