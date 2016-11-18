$(document).ready(function(){

  var signupData = $("#signup-form").serialize();
  console.log(signupData);

  $.post('/users', signupData, function(response){
    console.log(response);
  })

$('#loginButton').on('click', function(event){
  var loginData = $('#login-form').serialize();
  console.log(loginData);
  })



});
