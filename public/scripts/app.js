console.log("JS is working!");
$(document).ready(function(){
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/employees',
    dataType: 'json',
    success: onEmployeesSuccess,
    error: onEmployeesError
  });
  function onEmployeesSuccess(json){
    console.log('js linked!');
    for (var i = 0; i < json.length; i++) {
    $('#employee_data').append('<h4>' + json[i].name + ', ' + json[i].positionTitle + ', ' + json[i].email + ', ' + json[i].phoneNumber + '</h4>');
    }
  };
  function onEmployeesError(){
    console.log('error rendering employee details');
  };

  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/companies',
    dataType: 'json',
    success: onCompaniesSuccess,
    error: onCompaniesError
  });
  function onCompaniesSuccess(json){
    console.log('js linked!');
    for (var i = 0; i < json.length; i++) {
    $('#company_data').append('<h4>' + json[i].name + '</h4>');
    }
  };
  function onCompaniesError(){
    console.log('error rendering company details');
  };







});
