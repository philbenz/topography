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
  renderObject.title = 'checking the JSON';
  indexController.getJSON("hey", "guys!", (error, results) => {
    if (error) return next(error);
    if (results) {
      renderObject.phrase = results;
      res.render('index', renderObject);
    }
  });
});

module.exports = router;
