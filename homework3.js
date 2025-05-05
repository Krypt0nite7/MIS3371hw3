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
  errorFlag = 0;
  
  // This helps validate all form fields
  validateName();
  validateDOB();
  validateAddress();
  validateStateZip();
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

// This makesure the DOB is in the format of "MM/DD/YYYY" with numbers only before submission of the form
function validateDOB() {
  const dobInput = document.getElementById("date").value;
  const dobPattern = /^(0[1-9]|1[0-2])\/([0-2][0-9]|3[0-1])\/\d{4}$/;
  
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

// this validates the State, and Zip when the user is putting in the information
function validateStateZip() {
  const state = document.getElementById("State").value;
  const zip = document.getElementById("zip").value;
  const city = document.getElementById("city").value;
  const zipPattern = /^[0-9]{5}$/;
  
  if (state === "") {
    errorFlag++;
  }
  
  if (city.length === 0) {
    document.getElementById("city_text").innerHTML = "City is required";
    errorFlag++;
  } else {
    document.getElementById("city_text").innerHTML = "";
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

// This helps with validating the email to make sure the user is following the "name@domain.tdl" format
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

// This helps with formatting the user SSN in the fields of the form before submission
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
function validatePasswords() {
  const userid = document.getElementById("userid").value;
  const password1 = document.getElementById("password1").value;
  const password2 = document.getElementById("password2").value;
  
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

// this function validates the Appointment Date and Time before submission
function validateAppointment() {
  const appointmentDate = document.getElementById("Date").value;
  const appointmentTime = document.getElementById("Time").value;
  
  if (!appointmentDate || !appointmentTime) {
    errorFlag++;
    return;
  }
  
  // this creates date object by combining the appointment date and time and validates it before submission of the form.
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

// These are to ensure that the user is filling out the required fields on the form.
document.getElementById("city").required = true;
document.getElementById("Phone").required = true;
document.getElementById("ssn").required = true;
document.getElementById("password1").required = true; 
document.getElementById("password2").required = true;

// These are place holders of te forn for users to see when filling out the form
document.getElementById("city").placeholder = "City (required)";
document.getElementById("Phone").placeholder = "(XXX)XXX-XXXX";
document.getElementById("ssn").placeholder = "XXX-XX-XXXX";
document.getElementById("password1").placeholder = "Required";
document.getElementById("password2").placeholder = "Required";

// This is a event listener for city, phone, ssn, password1 and password2.
document.getElementById("city").addEventListener("input", validateStateZip);
document.getElementById("Phone").addEventListener("input", function(e) {
  formatPhoneNumber(e.target);
  validatePhone();
});
document.getElementById("ssn").addEventListener("input", function(e) {
  formatSSN(e.target);
  validateSSN();
});
document.getElementById("password1").addEventListener("input", validatePasswords);
document.getElementById("password2").addEventListener("input", validatePasswords);

function getdata1() {
    // This gets data from the form to put in the form data table.
    const formData = {
        "First Name": document.getElementById("FirstName").value,
        "Middle Initial": document.getElementById("MiddleInit").value,
        "Last Name": document.getElementById("LastName").value,
        "Date of Birth": document.getElementById("date").value,
        "Address Line 1": document.getElementById("addr1").value,
        "Address Line 2": document.getElementById("addr2").value,
        "City": document.getElementById("city").value,
        "State": document.getElementById("State").value,
        "Zip Code": document.getElementById("zip").value,
        "Phone": document.getElementById("Phone").value,
        "Email": document.getElementById("email").value,
        "SSN": document.getElementById("ssn").value,
        "User ID": document.getElementById("userid").value,
        "Appointment Date": document.getElementById("Date").value,
        "Appointment Time": document.getElementById("Time").value,
        "Pain Scale": document.getElementById("scale").value,
        "Description": document.getElementById("description").value
    };
         // This gets Bird Flu response
    const birdFluResponse = document.querySelector('input[name="fav_language"]:checked');
    if (birdFluResponse) {
        formData["Bird Flu Status"] = birdFluResponse.value;
    }
     // This gets selected symptoms
    const symptoms = [];
    for (let i = 1; i <= 5; i++) {
        const symptom = document.getElementById(`symptom${i}`);
        if (symptom && symptom.checked) {
            symptoms.push(symptom.value);
        }
    }
    if (symptoms.length > 0) {
        formData["Symptoms"] = symptoms.join(", ");
    }

    // Create output HTML
    let outputHTML = "<div style='background-color: #f0f0f0; padding: 15px; border-radius: 5px;'>";
    outputHTML += "<h3 style='color: #333; margin-bottom: 15px;'>Form Data Summary:</h3>";

    // This add each form field to the output
    for (const [key, value] of Object.entries(formData)) {
        if (value && value.length > 0 && key !== "password1" && key !== "password2") {
            outputHTML += `<p style='margin: 5px 0;'><strong>${key}:</strong> ${value}</p>`;
        }
    }
    outputHTML += "</div>";

    // this display the output of information from the form.
    const outputDiv = document.getElementById("outputformdata");
    outputDiv.innerHTML = outputHTML;
    outputDiv.style.display = "block";
}

// this adds event listener for the Get Data button
document.getElementById("getdata").addEventListener("click", getdata1);

// This initialize the form data displayed the on page load
window.onload = function() {
    document.getElementById("today").innerHTML = new Date().toLocaleDateString();
    document.getElementById("outputformdata").style.display = "none";
 // cookies.js - Simple cookie functions
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
// welcome.js - Handle welcome message
function updateWelcome() {
  var firstName = document.getElementById("FirstName").value;
  var welcomeText = "Welcome!";
  
  if (firstName) {
    welcomeText = "Welcome back " + firstName;
    if (firstName.toLowerCase() === "rontray") {
      welcomeText = "Welcome back Rontray!";
    }
  }
  
  // Update header iframe content
  try {
    var headerFrame = document.getElementById("headerFrame");
    if (headerFrame.contentDocument) {
      var welcomeDiv = headerFrame.contentDocument.getElementById("welcomeMessage");
      if (welcomeDiv) {
        welcomeDiv.textContent = welcomeText;
      }
    }
  } catch(e) {
    console.log("Could not update welcome message");
  }
}

// Load saved name on startup
window.onload = function() {
  var savedName = getCookie("firstName");
  if (savedName) {
    document.getElementById("FirstName").value = savedName;
    document.getElementById("rememberMe").checked = true;
    updateWelcome();
  }
  
  // Add event listener to form submission
  document.getElementById("signup").onsubmit = function() {
    if (document.getElementById("rememberMe").checked) {
      setCookie("firstName", document.getElementById("FirstName").value, 30);
    } else {
      setCookie("firstName", "", -1);
    }
    return true;
  };
  
  // Update welcome message when name is typed
  document.getElementById("FirstName").addEventListener("input", updateWelcome);
};

}
