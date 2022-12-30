const express = require('express');
const router = express.Router();
const postController = require('../controllers/post_controller');


router.get('/userpost', postController.postController);

module.exports = router;