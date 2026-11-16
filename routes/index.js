var express = require('express');
var router = express.Router();

// 1. Home page route
router.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});

// 2. About Me page route
router.get('/about', function(req, res) {
  res.render('aboutme', { title: 'About Me' });
});

// 3. Projects page route
router.get('/projects', function(req, res) {
  res.render('my-projects', { title: 'My Projects' });
});

// 4. Contact page route (GET means just looking)
router.get('/contact', function(req, res) {
  res.render('contact-me', { title: 'Contact Me' });
});

// 5. Contact form submission (Post or Submit)
router.post('/contact', function(req, res) {
  // Print what they typed to the terminal 
  console.log(req.body);
  res.render('thanks', { title: 'Thank You' });
});

module.exports = router;