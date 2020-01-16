const express = require("express");
const Dev = require('./controllers/Dev');
const Like = require('./controllers/Like');
const Dislike = require('./controllers/Dislike');

const router = express.Router();

router.get('/', (req, res) => {
    if (req.query.name === "Ari") {
        res.json({
            message: `${req.query.name} é bonitinha`
        });
    } else {
        res.json({
            message: `todos sao feiosos, menos a Ari`
        });
    }
});
router.get('/devs', Dev.index);
router.post('/devs', Dev.store);
router.post('/devs/:devId/likes', Like.store);
router.post('/devs/:devId/dislikes', Dislike.store);

module.exports = router;