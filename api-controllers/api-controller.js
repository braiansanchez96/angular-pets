const path = require('path');
const pool = require(path.join(__dirname, '../db-condig/db'));

exports.getPets = (req, res) => {
    pool.query('SELECT * FROM users WHERE id = $1', [1], (err, result) => {
        if (err) {
            throw err
        }

        res.send(result);
    })
}

exports.likePet = (req, res) => {
    res.send({ "vote": "ok" });
}