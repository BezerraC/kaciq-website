const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("layout", {
        body: 'contact',
        title: "Contato",
        bgColor: 'light'
      });
});

module.exports = router;
