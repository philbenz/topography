function sum(num1, num2, callback) {
  const total = num1 + num2;
  if (isNaN(total)) {
    const error = 'Something went wrong!';
    callback(error);
  } else {
    callback(null, total);
  }
}

function getJSON(string1, string2, callback) {
  const rephrase = string1 + " " + string2;

  callback(null, rephrase);
}

module.exports = {
  sum,
  getJSON
};
