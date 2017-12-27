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
  let months = ["Jan", "Feb", "Mar", "Apr"];

  return months;
}

function getJSON(string1, string2, callback) {
  const releaseView = {};

  releaseView.months = getMonths();
  callback(null, releaseView);
}

module.exports = {
  sum,
  getJSON
};
