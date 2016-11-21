$(document).ready(function(){
var employees;

$.ajax({
  method: 'GET',
  url: 'http://localhost:3000/api/companies',
  dataType: 'json',
  success: onSuccess
});
function onSuccess(json){
  employees = json[0].employees;
  console.log(json[0].employees);
  var source = $('#employeeInformation').html();
  var template = Handlebars.compile(source);
  var employeeHtml = template({ employees });
  $('#employeedata').append(employeeHtml);
};



});
