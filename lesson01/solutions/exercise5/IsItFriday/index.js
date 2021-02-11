const moment = require("moment");

function IsItFriday() {
  //if (moment().day() === 5) return true;
  //else return false;

  return moment().day() === 5;
}

module.exports = IsItFriday;