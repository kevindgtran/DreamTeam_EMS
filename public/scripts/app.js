$(document).ready(function() {
  console.log("app.js connected")

$.ajax({
  method: 'GET',
  url: '/api/employees',
  success: onSuccess,
  error: onError
});

function onSuccess(json){
  console.log(json);
};

function onError(xhr, status, errorThrown) {
  alert('Sorry, there was a problem!');
  console.log('Error: ' + errorThrown);
  console.log('Status: ' + status);
  console.dir(xhr);
};





















});
