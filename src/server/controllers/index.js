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

function getPortfolio() {

  /*
  Program: Electronic Delivery
  Project: Print Replacement
  Project: Composition Tool

  Program: Client Commitments
  Project: Apple 30 Day Restriction
  Project: Bechtel buy/sell fee report
  */
  obj1 = {"program":"Electronic Delivery", "projects": {
    "project1":"Print Replacement",
    "project2":"Composition Tool",
    "project3":"Migrate to Hyland"}
  };

  obj2 = {"program":"Client Commitments", "projects": {
    "project1":"Apple 30 Day Restriction",
    "project2":"Bechtel buy/sell fee report"}
  };

  portfolioView = new Array();
  portfolioView.push(obj1);
  portfolioView.push(obj2);

  return portfolioView;
}

function getJSON(string1, string2, callback) {
  const releaseView = {};

  releaseView.months = getMonths();
  releaseView.efforts = getPortfolio();
  callback(null, releaseView);
}

module.exports = {
  sum,
  getJSON
};
