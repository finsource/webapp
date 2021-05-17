async function getData() {
    let ifsc = document.getElementById("ifsc_input").value;

    const datapoint = `https://ifsc.razorpay.com/${ifsc}`;

    const response = await fetch(datapoint);
    const data = await response.json();

    const output = document.getElementById("output");

    if (ifsc == '') {
        alert("Please enter an IFSC code");
        return;
    }

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
        alert("Incorrect ifsc code entered! Please enter correct code again");
    }
}

document.getElementById("submit_ifsc").addEventListener("click", getData);

document.getElementById('reset_ifsc').addEventListener('click',() => {
    document.getElementById('ifsc_input').value = "";
});

window.onload = (() => {
    document.getElementById('output').innerHTML = `<p class = "welcome-text" id = "welcome-text">This is the portal where you can enter a bank's IFSC code and get all the information available about the bank.</p>`;
});