const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("layout", {
        body: 'about',
        title: "Sobre Nós",
      });
});

module.exports = router;
