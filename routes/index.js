import express from 'express';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Express'
  });
});

router.post('/submit-form', async (req, res) => {
  var pg = require("pg");
  var firstname = req.body.fname;
  var lastname = req.body.lname;
  var email = req.body.email;
  var password = req.body.password[1];

  const r = await req.pool.query("INSERT INTO users(firstname, lastname, email, password) VALUES($1, $2, $3, $4)", [firstname, lastname, email, password]);

  console.log(r);
  res.render('login', {
    title: 'Crypto sale'
  });
});


export default router;
