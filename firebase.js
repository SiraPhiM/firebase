
window.onload = function() {
  render();
}

function render() {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  recaptchaVerifier.render();
}

function phoneAuth() {
  var phone = document.getElementById('phone').value

  firebase.auth().signInWithPhoneNumber(phone, window.recaptchaVerifier)
    .then(function(confirmationResult) {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      codeResult = confirmationResult;
      console.log (codeResult);
      alert('message sent');
    }).catch(function(error) {
      alert(error.message('message not sent'));
    });
}


function show() {
  alert('Hello');
}
