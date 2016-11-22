var employees;


$(document).ready(function() {
  console.log("App initiated")


  $.ajax({
      method: 'GET',
      url: '/api/companies',
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
      $.ajax({
        method: 'POST',
        url: '/api/companies/:companyId/employees',
        data: $(this).serialize(),
        success: newEmployee,
        error: newEmployeeError
      });
  });

  function newEmployee(json) {
    $('#employeedata input').val('');
    onSuccess(json);
  }

  function newEmployeeError() {
    console.log("ERROR: " + "new employee not created");
  }

});
