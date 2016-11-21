var allEmployees = [];
  var employees;


$(document).ready(function() {
  console.log("App initiated")


  $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/api/companies',
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
      console.log('New employee created', $(this).serialize());
      $.ajax({
        method: 'POST',
        url: '/api/companies/:companyId/employees',
        data: $(this).serialize(),
        success: newEmployee,
        error: newEmployeeError
      });
      console.log('button works');
  });

  function newEmployee(json) {
    $('#employeedata input').val('');
    allEmployees.push(json);
    onSuccess(json);
  }

  function newEmployeeError() {
    console.log("error: " + "new employee not created");
  }

});
