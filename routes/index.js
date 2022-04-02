const router = require('express').Router();
// IMPORT all API Routes 
const apiRoutes = require('./api');

// ADD Prefix of api to all API Routes imported from api directory 
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;