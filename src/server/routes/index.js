const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

// router.get('/', function (req, res, next) {
//   const renderObject = {};
//   renderObject.title = 'showing a sum';
//   indexController.sum(1, 2, (error, results) => {
//     if (error) return next(error);
//     if (results) {
//       renderObject.sum = results;
//       res.render('index', renderObject);
//     }
//   });
// });

router.get('/', function (req, res, next) {
  console.log('in the get');
  const renderObject = {};
  renderObject.title = '2017 Release Topography';
  indexController.getJSON('2018', 'Release',(error, results) => {
    if (error) return next(error);
    if (results) {
      renderObject.months = results.months;
      renderObject.programs = results.efforts;
      console.log('efforts: ', results);
      res.render('index', renderObject);
    }
  });
});

module.exports = router;
