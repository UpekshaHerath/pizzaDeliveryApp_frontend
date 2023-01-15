let validate = () => {
  let password = document.getElementById("Password").value;
  let postalCode = document.getElementById("Postcode").value;
  let FName = document.getElementById('FName').value;
  let LName = document.getElementById('LName').value;

  let street = document.getElementById('Street').value;
  let town = document.getElementById('Town').value;
  let email = document.getElementById('email').value;
  let TpNo = document.getElementById('TpNo').value;

  let Ltitle = document.getElementById('Ltitle').value;
  let UName = document.getElementById('UName').value;
  let confirm = document.getElementById('confirm').value;

  if (isValidPassword(password)) {
    if (isPostalcodeValid(postalCode)) {
        if (FName === "" || LName === "" || street === "" || town === "" || email === "" || TpNo === "" || Ltitle === "" || UName === "" || confirm === "") {
            alert('Check whether is there any blank field available');
            return false;
        } else {
            if (password === confirm) {
                return true;
            }
            alert('The password and the conferm password are not matching !!');
            return false;
        }
    } else {
      alert("Check that the postcode is 4-digit.");
      return false;
    }
  } else {
    alert("Check that the password is at least 8-character long");
    return false;
  }
};

// check the validity of the password
function isValidPassword(password) {
    console.log(password);

  return password.length >= 8;
}

// check the validity of the postal code
function isPostalcodeValid(postalCode) {
  return postalCode.length === 4;
}
