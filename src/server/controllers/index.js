function sum(num1, num2, callback) {
  const total = num1 + num2;
  if (isNaN(total)) {
    const error = 'Something went wrong!';
    callback(error);
  } else {
    callback(null, total);
  }
}

function getMonths() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr'];

  return months;
}

function getJSON(string1, string2, callback) {
  const releaseView = new {};

  releaseView.months = getMonths();
  callback(null, releaseView);
}

module.exports = {
  sum,
  getJSON
};
