var ip_reg = new RegExp('^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$', 'i');
var url_reg = new RegExp('^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)', 'g');
var email_reg = new RegExp('^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$', 'i');
var date_reg = new RegExp('(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\\d\\d', 'i');
var time_reg = new RegExp('^([0-1]\\d|2[0-3])(:[0-5]\\d){2}$', 'i');

$(document).ready(function () {

    $('button').click(function (event) {
        var id = event.target.previousElementSibling.id;
        if (validateField(id)) {
            console.log('js check ' + id + 'successfully');
            $.post("validation.php",
                {
                    datatype: id,
                    data: document.getElementById(id).value
                })
                .done(function (response) {
                    console.log("php validation: " + response);
                });
        }
    });

});

function validateField(field) {
    var field_value = document.getElementById(field).value;
    if (!field_value) {
        return false;
    }

    var check_field = field_value.match(eval(field + '_reg'));
    return check_field[0] === field_value;
}
