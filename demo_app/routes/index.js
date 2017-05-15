
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
/*
var selOption = document.devForm.devSelect.value;
var target = document.getElementById("output");


  function onButtonClick(){
            switch (selOption) {
      case value01:
        target.innerHTML =selOption+"が選択されています"
        break;
      case value02:
        target.innerHTML= selOption+"が選択されています"
        break;
    }
  }
*/
