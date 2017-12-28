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
  let months = ['Jan', 'Feb', 'Mar', 'Apr'];

  return months;
}

function getPortfolio() {
  /*JSON Example*/
  /*
  Program: Electronic Delivery
  Project: Print Replacement
  Project: Composition Tool

  Program: Client Commitments
  Project: Apple 30 Day Restriction
  Project: Bechtel buy/sell fee report
  */
  var obj1 = {
    program:'Electronic Delivery',
    projects: {
      project1:'Print Replacement',
      project2:'Composition Tool',
      project3:'Migrate to Hyland'
    }
  };

  var obj2 = {
      program:'Client Commitment',
      projects: {
        project1:'Apple 30 Day Restriction',
        project2:'Bechtel buy/sell fee report'
      }
    };

  var portfolioView = [];
  portfolioView.push(obj1);
  portfolioView.push(obj2);
  console.log('portfolio: ', portfolioView);
  return portfolioView;
}

function getJSON(string1, string2, callback) {
  const releaseView = {};
  console.log('in getJSON');
  releaseView.months = getMonths();
  releaseView.efforts = getPortfolio();
  callback(null, releaseView);
}

module.exports = {
  sum,
  getJSON
};
