const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateMenuUpdateInput(data) {
  let errors = {};
  data.productid = !isEmpty(data.productid) ? data.productid : "";
  data.category = !isEmpty(data.category) ? data.category : "";
  data.comboname = !isEmpty(data.comboname) ? data.comboname : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.imageurl = !isEmpty(data.imageurl) ? data.imageurl : "";

  if (Validator.isEmpty(data.productid)) {
    errors.productid = "Combo Number is required";
  }
  if (Validator.isEmpty(data.category)) {
    errors.category = "Category is required";
  }
  if (Validator.isEmpty(data.comboname)) {
    errors.comboname = "comboname is required";
  }
  if (Validator.isEmpty(data.price)) {
    errors.price = "Price is required";
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = "description is required";
  }
  if (Validator.isEmpty(data.imageurl)) {
    errors.imageurl = "Image url is required";
  }

  //imageurl

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
