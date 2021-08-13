const { Router } = require('express');
const db = require('../db/database')
const router = Router();


router.get('/allForms', async(req, res) => {

    try {
        const forms = await db.promise().query(`SELECT * FROM assessment_form`);
        res.status(201).send(forms[0]);
    }
    catch(err) {
        res.status(401).send(err);
    }

})



module.exports = router;