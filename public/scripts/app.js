$(document).ready(function() {
  console.log("App initiated")
    var employees;

<<<<<<< HEAD
$.ajax({
  method: 'GET',
  url: 'http://localhost:3000/api/companies/:companyId/employees',
  dataType: 'json',
  success: onSuccess
});

function onSuccess(json){
  employees = json;
  console.log(json);
  var source = $('#employeeInformation').html();
  var template = Handlebars.compile(source);
  var employeeHtml = template({ employees });
  $('#employeedata').append(employeeHtml);
}

=======
    $('#createButton').on('click', function(e) {
        // e.preventDefault();
        // $.ajax({
        //   method: 'POST',
        //   url: '',
        //   dataType: 'json',
        //   success: onSuccess
        // });
        console.log('button works');
    });

    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/api/companies',
        dataType: 'json',
        success: onSuccess
    });

    function onSuccess(json) {
      console.log(json);
        employees = json[0].employees;
        // console.log(json[0].employees);
        var source = $('#employeeInformation').html();
        var template = Handlebars.compile(source);
        var employeeHtml = template({
            employees
        });
        console.log(employeeHtml)
        $('#employeedata').append(employeeHtml);
    };
>>>>>>> e36172f8c78b4d2899b56b0e6c528ca5d5b98419



});
