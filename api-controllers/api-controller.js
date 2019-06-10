const path = require('path');
const pool = require(path.join(__dirname, '../db-config/db'));

exports.getPets = (req, res) => {
    pool.query('SELECT id, owner, name, age, photo from pets;', (err, result) => {
        if (err) {
            res.status(500).send({ "result": "error" });
            throw err
        }

        res.status(200).send(result.rows);
    })
}

exports.addPet = (req, res) => {
    const query = {
        text: 'insert into pets(owner,name,age,photo,type) values($1,$2,$3,$4,$5)',
        values: [req.body.owner, req.body.name, req.body.age, req.body.photo, req.body.type]
    }
    console.log(query);
    pool.query(query, (err, result) => {
        if (err) {
            res.status(500).send({ "result": "error" });
            throw err;
        }

        res.status(200).send({ "result": "ok" });
    })
}