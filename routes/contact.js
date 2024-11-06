const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("layout", {
        body: 'contact',
        title: "Contato",
      });
});

module.exports = router;
