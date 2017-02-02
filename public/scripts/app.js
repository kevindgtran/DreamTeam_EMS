var allEmployees = [];

$(document).ready(function() {
  console.log("App initiated")

  $.ajax({
      method: 'GET',
      url: '/api/companies',
      dataType: 'json',
      success: onSuccess
  });


  function onSuccess(employee) {
    console.log('rendering employee:', employee);
    employee.forEach(function(employee) {
    var source = $('#employeeInformation').html();
    var template = Handlebars.compile(source);
    var employeeHtml = template(employee);
    $('#employeedata').append(employeeHtml);
    allEmployees.push(employee)
  });
}

  $('#createButton').on('click', function(e) {
      e.preventDefault();
      $.ajax({
        method: 'POST',
        url: '/api/companies/:companyId/employees',
        data: $(this).serialize(),
        success: newEmployee,
        error: newEmployeeError
      });
        $(this).trigger('reset');
  });

  function newEmployee(json) {
    $('#employeedata input').val('');
    allEmployees.push(json);
    onSuccess(json);
  }

  function newEmployeeError() {
    console.log("ERROR: " + "new employee not created");
  }

  $('.table-condensed').on('click', '.btn-warning', function(){
    console.log('clicked delete button');
    $.ajax({
      method: 'DELETE',
      url: '/api/companies/:companyId/employees'+$(this).attr('data-id'),
      success: deleteEmployee,
      error: deleteEmployeeError
    });
  });



  function deleteEmployee(json) {
    var employee = json;
    console.log(json);
    var employeeId = employee._id;
    for(var i=0; i<allEmployees.length; i++) {
  if(allEmployees[i]._id === animeId) {
    allEmployees.splice(i, 1);
    break;
    };
  };
}

function deleteEmployeeError() {
  console.log("There was an error deleting an employee.");
}

});
