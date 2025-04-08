/*
 Name: Deshunn Jackson
 File: homework3.js
 Date Created: 03/03/2025
 Date Updated: 03/21/2025
 Purpose: Validate data from the patient medical form with enhanced validation for phone, email, and user ID
*/

// Initialize error flag
let errorFlag = 0;

// Function to handle form submission
function processFormSubmission() {
  // Reset error flag
  errorFlag = 0;
  
  // This helps validate all form fields
  validateName();
  validateDOB();
  validateAddress();
  validateCityStateZip();
  validatePhone();
  validateEmail();
  validateSSN();
  validateUserID();
  validatePasswords();
  validateAppointment();
  validateDescription();
  
  // If there are any errors exist, this prevent form submission
  if (errorFlag > 0) {
    alert("Please fix all form errors before submitting.");
    return false;
  }
  
  return true;
}

// this help validates the First, Middle Initial, and Last Name
function validateName() {
  const firstName = document.getElementById("FirstName").value;
  const middleInit = document.getElementById("MiddleInit").value;
  const lastName = document.getElementById("LastName").value;
  
  // first name is validated to ensure it is a minimum of 4 characters.
  if (firstName.length < 4) {
    document.getElementById("name_text").innerHTML = "First name must be at least 4 characters.";
    errorFlag++;
    return;
  }
  
  // middle initial (exactly 1 character) is validated
  if (middleInit.length !== 1) {
    document.getElementById("name_text").innerHTML = "Middle initial must be exactly 1 character.";
    errorFlag++;
    return;
  }
  
  // This validates the last name to ensure it is at least 4 characters but can be more. 
  if (lastName.length < 4) {
    document.getElementById("name_text").innerHTML = "Last name must be at least 4 characters.";
    errorFlag++;
    return;
  }
  
  document.getElementById("name_text").innerHTML = "";
}

// This makesure the DOB is in the format of "MM/DD/YYYY" with numbers only before submission of the  form
function validateDOB() {
  const dobInput = document.getElementById("date").value;
  const dobPattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
  
  if (!dobPattern.test(dobInput)) {
    document.getElementById("date").setCustomValidity("Please enter a valid date in MM/DD/YYYY format");
    document.getElementById("date").nextElementSibling.innerHTML = "Date must be in MM/DD/YYYY format";
    errorFlag++;
  } else {
    document.getElementById("date").setCustomValidity("");
    document.getElementById("date").nextElementSibling.innerHTML = "";
  }
}

// This validates the address of address1 and is required to be field out.
function validateAddress() {
  const addr1 = document.getElementById("addr1").value;
  
  if (addr1.length < 8) {
    document.getElementById("addr1_text").innerHTML = "Address Line 1 must be at least 8 characters.";
    errorFlag++;
  } else {
    document.getElementById("addr1_text").innerHTML = "";
  }
}

// this validates the City, State, and Zip when the user is putting in the information
function validateCityStateZip() {
  const city = document.getElementById("city").value;
  const state = document.getElementById("State").value;
  const zip = document.getElementById("zip").value;
  const zipPattern = /^[0-9]{5}$/;
  
  if (city.length === 0) {
    errorFlag++;
  }
  
  if (state === "") {
    errorFlag++;
  }
  
  if (!zipPattern.test(zip)) {
    errorFlag++;
    document.getElementById("zip").setCustomValidity("Zip code must be exactly 5 digits");
  } else {
    document.getElementById("zip").setCustomValidity("");
  }
}

// this validates the phone number to make sure it have the "(XXX)XXX-XXXX" format with numbers only
function validatePhone() {
  const phone = document.getElementById("Phone").value;
  const phonePattern = /^$\d{3}$\d{3}-\d{4}$/;
  
  if (!phonePattern.test(phone)) {
    document.getElementById("phone_text").innerHTML = "Phone number must be in format (XXX)XXX-XXXX with numbers only.";
    errorFlag++;
  } else {
    document.getElementById("phone_text").innerHTML = "";
  }
}

// Format phone number as user types
function formatPhoneNumber(input) {
  let value = input.value.replace(/\D/g, '');
  
  if (value.length > 0) {
    if (value.length <= 3) {
      value = '(' + value;
    } else if (value.length <= 6) {
      value = '(' + value.substring(0, 3) + ')' + value.substring(3);
    } else {
      value = '(' + value.substring(0, 3) + ')' + value.substring(3, 6) + '-' + value.substring(6, 10);
    }
  }
  
  input.value = value;
}

// This helps with validating the email to make sure the user is following the  "name@domain.tdl" format
function validateEmail() {
  const email = document.getElementById("email").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailPattern.test(email)) {
    document.getElementById("email_text").innerHTML = "Please enter a valid email address in the format name@domain.tdl";
    errorFlag++;
  } else {
    document.getElementById("email_text").innerHTML = "";
  }
}

// This help validates the SSN
function validateSSN() {
  const ssn = document.getElementById("ssn").value;
  const ssnPattern = /^\d{3}-\d{2}-\d{4}$/;
  
  if (!ssnPattern.test(ssn)) {
    document.getElementById("ssn").setCustomValidity("Social Security Number must be in XXX-XX-XXXX format with digits only");
    errorFlag++;
  } else {
    document.getElementById("ssn").setCustomValidity("");
  }
}

// This helps with formatting thte user SSN in the fields of the  form before submission
function formatSSN(input) {
  let value = input.value.replace(/\D/g, '');
  
  if (value.length > 3 && value.length <= 5) {
    value = value.substring(0, 3) + '-' + value.substring(3);
  } else if (value.length > 5) {
    value = value.substring(0, 3) + '-' + value.substring(3, 5) + '-' + value.substring(5, 9);
  }
  
  input.value = value;
}

// This validates the user Id to ensure the user do not put a number first and is a min 5 character and a maximum if 20 characters long. 
function validateUserID() {
  const userid = document.getElementById("userid").value;
  const useridPattern = /^[A-Za-z][A-Za-z0-9_-]{4,19}$/;
  
  if (!useridPattern.test(userid)) {
    document.getElementById("userid_text").innerHTML = "User ID must start with a letter and contain only letters, numbers, dashes or underscores. Length must be 5-20 characters.";
    errorFlag++;
  } else {
    document.getElementById("userid_text").innerHTML = "";
  }
}

// This validates password fields for password1 and password2 
function passwordentry() {
  const password1 = document.getElementById("password1").value;
  const password2 = document.getElementById("password2").value;
  const userid = document.getElementById("userid").value;
  
  // This make sure the password is following the required instruction to create a password. 
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
  if (!passwordPattern.test(password1)) {
    document.getElementById("password1_text").innerHTML = "Password must contain at least one number, one uppercase letter, one lowercase letter, and be at least 8 characters long.";
    errorFlag++;
  } else if (password1 === userid) {
    document.getElementById("password1_text").innerHTML = "Password cannot match your UserID.";
    errorFlag++;
  } else {
    document.getElementById("password1_text").innerHTML = "";
  }
  
  // This checks to see if the password2 matches password1 
  if (password1 !== password2) {
    document.getElementById("password2_text").innerHTML = "Passwords do not match.";
    errorFlag++;
  } else {
    document.getElementById("password2_text").innerHTML = "";
  }
}

// Validate description field (no more than 200 words)
function validateDescription() {
  const description = document.getElementById("description").value.trim();
  
  if (description.length > 0) {
    const wordCount = description.split(/\s+/).length;
    
    if (wordCount > 200) {
      document.getElementById("description_text").innerHTML = "Description cannot exceed 200 words. Current word count: " + wordCount;
      errorFlag++;
    } else {
      document.getElementById("description_text").innerHTML = "Word count: " + wordCount;
    }
  }
}

// This helps count the amount of words that the user is typing and making sure it doesn't exceeds 200.
function countWords(input) {
  const text = input.value.trim();
  
  if (text.length > 0) {
    const wordCount = text.split(/\s+/).length;
    document.getElementById("description_text").innerHTML = "Word count: " + wordCount;
    
    if (wordCount > 200) {
      document.getElementById("description_text").innerHTML = "Description cannot exceed 200 words. Current word count: " + wordCount;
      input.setCustomValidity("Description cannot exceed 200 words");
    } else {
      input.setCustomValidity("");
    }
  } else {
    document.getElementById("description_text").innerHTML = "";
  }
}

// this function validatets the Appointment Date and Time before submission
function validateAppointment() {
  const appointmentDate = document.getElementById("Date").value;
  const appointmentTime = document.getElementById("Time").value;
  
  if (!appointmentDate || !appointmentTime) {
    errorFlag++;
    return;
  }
  
  //this creates date object by combining the appointment date and time and validates it before submission of the form.
  const dateObj = new Date(appointmentDate + "T" + appointmentTime);
  const dayOfWeek = dateObj.getDay();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  
  // This function checks if appointment is between Monday-Friday and not outside the days of operations. 
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    document.getElementById("Date").setCustomValidity("Appointments are only available Monday through Friday");
    errorFlag++;
    return;
  } else {
    document.getElementById("Date").setCustomValidity("");
  }
  
  // this functions checks if the appointment is between 9:00am and 5:00pm
  if (hours < 9 || (hours === 17 && minutes > 0) || hours > 17) {
    document.getElementById("Time").setCustomValidity("Appointments are only available between 9:00am and 5:00pm");
    errorFlag++;
  } else {
    document.getElementById("Time").setCustomValidity("");
  }
}

// This is a function that displays form data 
function getdata1() {
  var formcontents = document.getElementById("signup");
  var formoutput;
  var datatype;
  var i;
  formoutput = "<table class='output'><th>Dataname</th><th>Type</th><th>Value</th>";
  for (i = 0; i < formcontents.length; i++) {
    datatype = formcontents.elements[i].type;
    switch (datatype) {
      case "checkbox":
        if (formcontents.elements[i].checked) {
          formoutput = formoutput + "<tr><td align='right'>" + formcontents.elements[i].name + "</td>";
          formoutput = formoutput + "<td align='right'>" + datatype + "</td>";
          formoutput = formoutput + "<td class='outputdata'>Checked</td></tr>";
        }
        break;
      case "radio":
        if (formcontents.elements[i].checked) {
          formoutput = formoutput + "<tr><td align='right'>" + formcontents.elements[i].name + "</td>";
          formoutput = formoutput + "<td align='right'>" + datatype + "</td>";
          formoutput = formoutput + "<td class='outputdata'>" + formcontents.elements[i].value + "</td></tr>";
        }
        break;
      case "button":
      case "submit":
      case "reset":
        break;
      default:
        formoutput = formoutput + "<tr><td align='right'>" + formcontents.elements[i].name + "</td>";
        formoutput = formoutput + "<td align='right'>" + datatype + "</td>";
        formoutput = formoutput + "<td class='outputdata'>" + formcontents.elements[i].value + "</td></tr>";
    }
  }

  if (formoutput.length > 0) {
    formoutput = formoutput + "</table>";
    document.getElementById("outputformdata").innerHTML = formoutput;
    document.getElementById("outputformdata").style.display = "block";
  }
}

// This chechs the form to ensure it is validated correctly before the user submits the form. 
function checkform() {
  errorFlag = 0;
  
  validateName();
  validateDOB();
  validateAddress();
  validateCityStateZip();
  validatePhone();
  validateEmail();
  validateSSN();
  validateUserID();
  passwordentry();
  validateAppointment();
  validateDescription();
  
  if (errorFlag > 0) {
    alert("Please fix the indicated errors!");
    document.getElementById("submit").disabled = true;
  } else {
    document.getElementById("submit").disabled = false;
    alert("Form validation successful! You can submit the form now.");
  }
}

// This addes event listeners when the page is loaded by the user. 
window.onload = function() {
  // Display current date
  document.getElementById("today").innerHTML = new Date().toLocaleDateString();
  
  // This is an input for event listeners for DOB to ensure correct format.
  document.getElementById("date").addEventListener("input", function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 4) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4) + '/' + value.substring(4, 8);
    } else if (value.length > 2) {
      value = value.substring(0, 2) + '/' + value.substring(2);
    }
    e.target.value = value;
  });
  
  // This is an input for event listeners for SSN to ensure correct format.
  document.getElementById("ssn").addEventListener("input", function(e) {
    formatSSN(e.target);
  });
  
  // This is an input for event listeners for phone to ensure correct format (XXX)XXX-XXXX.
  document.getElementById("Phone").addEventListener("input", function(e) {
    formatPhoneNumber(e.target);
  });
  
  // This is an input for event listener for zip code to ensure numbers only.
  document.getElementById("zip").addEventListener("input", function(e) {
    const zipInput = e.target.value.replace(/[^0-9]/g, '');
    e.target.value = zipInput;
  });
  
  // Add input event listener for description to count words.
  document.getElementById("description").addEventListener("input", function(e) {
    countWords(e.target);
  });
  
  // Add change event listener for Date field to validate business days.
  document.getElementById("Date").addEventListener("change", function(e) {
    const dateObj = new Date(e.target.value);
    const dayOfWeek = dateObj.getDay();
    
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      e.target.setCustomValidity("Appointments are only available Monday through Friday");
    } else {
      e.target.setCustomValidity("");
    }
  });
  
  // Add change event listener for Time field to validate business hours.
  document.getElementById("Time").addEventListener("change", function(e) {
    const timeValue = e.target.value;
    const [hours, minutes] = timeValue.split(':').map(Number);
    
    if (hours < 9 || (hours === 17 && minutes > 0) || hours > 17) {
      e.target.setCustomValidity("Appointments are only available between 9:00am and 5:00pm");
    } else {
      e.target.setCustomValidity("");
    }
  });
  
  // Setup pain scale slider
  var slider = document.getElementById("scale");
  var output = document.getElementById("rangedisplay");
  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
  };
};

//End of document: homework3.js
