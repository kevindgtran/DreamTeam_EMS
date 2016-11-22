<<<<<<< HEAD
var employees;
=======
var allEmployees = [];
  var employees;
>>>>>>> 2852e1f8615d5297dfc26a760c50ee695288dc4b


$(document).ready(function() {
  console.log("App initiated")


  $.ajax({
      method: 'GET',
<<<<<<< HEAD
      url: '/api/companies',
=======
      url: 'http://localhost:3000/api/companies',
>>>>>>> 2852e1f8615d5297dfc26a760c50ee695288dc4b
      dataType: 'json',
      success: onSuccess
  });

  function onSuccess(json) {
    console.log(json);
    employees = json[0].employees;
    var source = $('#employeeInformation').html();
    var template = Handlebars.compile(source);
    var employeeHtml = template({
        employees
    });
    $('#employeedata').append(employeeHtml);
};


  $('#createButton').on('click', function(e) {
      e.preventDefault();
<<<<<<< HEAD
=======
      console.log('New employee created', $(this).serialize());
>>>>>>> 2852e1f8615d5297dfc26a760c50ee695288dc4b
      $.ajax({
        method: 'POST',
        url: '/api/companies/:companyId/employees',
        data: $(this).serialize(),
        success: newEmployee,
        error: newEmployeeError
      });
<<<<<<< HEAD
=======
      console.log('button works');
>>>>>>> 2852e1f8615d5297dfc26a760c50ee695288dc4b
  });

  function newEmployee(json) {
    $('#employeedata input').val('');
    onSuccess(json);
  }

  function newEmployeeError() {
<<<<<<< HEAD
    console.log("ERROR: " + "new employee not created");
=======
    console.log("error: " + "new employee not created");
>>>>>>> 2852e1f8615d5297dfc26a760c50ee695288dc4b
  }

});
