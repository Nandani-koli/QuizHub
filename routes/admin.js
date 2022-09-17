const express = require('express');
const router = express.Router();
const verify = require('../controller/admin-verify');
const admindo = require('../controller/admindo');

//admin login verification 
router.post('/',verify.verify);

router.get('/' , verify.logout)

router.get('/create-quiz',verify.createquiz);

// router.get('/previous-quizzes',verify.previousquizzes);

router.get('/previous-quizzes/Result',verify.result);


//create a quiz 
router.post('/create-quiz',admindo.create);

//show the previous quizzes
router.get('/previous-quizzes',admindo.previousquizzes);

module.exports = router;