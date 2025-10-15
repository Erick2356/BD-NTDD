const express = require("express");
const userSchema = require("../models/article");

const router = express.Router();

//create article
router.post('/articles', (req, res) => {
    const article = userSchema(req.body);

    article.save().then((data) => res.json(data)).catch((error) => res.json({ message: error }));

})



module.exports = router;