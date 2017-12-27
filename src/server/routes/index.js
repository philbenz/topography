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
  const renderObject = {};
  // const months = ["Jan", "Feb", "Mar", "Apr"];
  renderObject.title = '2018 Release Topography';
  indexController.getJSON("2018", "Release",(error, results) => {
    if (error) return next(error);
    if (results) {
      renderObject.months = results.months;
      res.render('index', renderObject);
    }
  });
});

module.exports = router;
