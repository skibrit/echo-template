const eol = require("eol");

const concatenateString = (stringValues) => {
  let strArr = eol.split(stringValues);
  strArr = strArr[0].split(",");
  return strArr;
};

module.exports = {
  concatenateString,
};
