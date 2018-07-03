// every time we put something in the input forms, we want to cause the blur event, so when we click out of the form that's when we want the validation to go off, not just by simply submiting the form with the button

// Form Blur Event Listeners
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName () {
  // first thing, we want to get the value of the name field
  // the name should be letters, between A and Z, capital or lower case, and it should be between 2 and 10 characters
  const name = document.getElementById("name");
  const re = /^[a-zA-Z]{2,10}$/;

  // if invalid we need to add that is-invalid class to the input in order to see the message and make the input red; if valid we want to make sure that is-invalid class is remove
  if(!re.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}

// US have 5-digit zipcode and sometimes they add dash and 4 more numbers on the end
function validateZip () {
  const zip = document.getElementById("zip");
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  if(!re.test(zip.value)) {
    zip.classList.add("is-invalid");
  } else {
    zip.classList.remove("is-invalid");
  }
}

// something@something.com
function validateEmail () {
  const email = document.getElementById("email");
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}

// all of these formats:
// 555-555-5555; 555.555.5555; 555 555 5555; (555) 555 5555; 5555555555
function validatePhone () {
  const phone = document.getElementById("phone");
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if(!re.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
}