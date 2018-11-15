const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";
  data.location = !isEmpty(data.location) ? data.location : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 to 30 characters";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is Invalid";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }
  if (!Validator.isLowercase(data.username)) {
    errors.username = "Name must be lowercase";
  }
  if (!Validator.isLength(data.username, { min: 2, max: 30 })) {
    errors.username = "Name must be between 2 to 30 characters";
  }
  if (Validator.isEmpty(data.username)) {
    errors.username = "Username is required";
  }
  if (!Validator.isAlphanumeric(data.password, "en-US")) {
    errors.password = "Password must have atleast one Letter and Number";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be atleast 6 characters";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Password is required";
  }
  if (!Validator.isLength(data.phoneNumber, { min: 10, max: 10 })) {
    errors.phoneNumber =
      "PhoneNumber must be 10 characters without spaces or brackets";
  }
  if (!Validator.isMobilePhone(data.phoneNumber)) {
    errors.phoneNumber = "Phone Number Invalid";
  }
  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = "Phone Number is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
