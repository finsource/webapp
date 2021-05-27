var db = openDatabase('../data/database.db', '1.0', 'database', 655535);

$(function () {
    $("#submit").click(function () {
        db.transaction(function (transaction) {
            var sql = "CREATE TABLE users " +
                "(name VARCHAR(20) NOT NULL," +
                "email VARCHAR(100) NOT NULL PRIMARY KEY," +
                "phone VARCHAR(10) NOT NULL)";
            
            transaction.executeSql(sql, undefined, function () {
                alert("Table is created successfully");
            },

                function () {
                    alert("Table is already being created");
                })
        });
    });

    $('#submit').click(function () {
        var name = $("#name-input").val();
        var email = $("#email-input").val();
        var phone = $('#phone-input').val();


        db.transaction(function (transaction) {
            var sql = `INSERT INTO users (name , email , phone) VALUES(${name},${email},${phone})`;
            transaction.executeSql(sql, [name, email, phone], function () {
                alert("New item is added successfully");
            },

                function (transaction, err) {
                    alert(err.message);
                });
        });
    });
});

function loadData() {
    $("#itemlist").children().remove();
    db.transaction(function (transaction) {
        var sql = "SELECT * FROM users ORDER BY id DESC";

        transaction.executeSql(sql, undefined, function (transaction, result) {
            if (result.rows.length) {
                for (var i = 0; i < result.rows.length; i++) {

                    var row = result.rows.item(i);
                    var name = row.name;
                    var id = row.id;
                    var email = row.email;
                    var phone = row.phone;

                    $("#itemlist").append('<tr id="del' + id + '"><td>' + id + '</td><td>' + name + '</td><td id="newqty' + id + '">' + email + '</td><td><a href="#" class="btn btn-danger deleteitem" data-id="' + id + '">Delete</a> <a href="#" class="btn btn-primary updateitem" data-id="' + id + '">Update</a></td></tr>');
                }
            } else {
                $("#itemlist").append('<tr><td colspan="3" align="center">No Item Found</td></tr>');
            }
        });
    });
}

document.getElementById('itemlist').addEventListener('click' , loadData);