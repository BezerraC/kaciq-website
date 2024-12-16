const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("layout", {
        body: 'home',
        title: "Home",
        bgColor: 'light'
      });
});

module.exports = router;
