const { Router } = require('express')
const router = Router();
const db = require('../db/database')
const jwt = require('jsonwebtoken')

// router.post('/signup', async(req, res) => {
//     const { fullname, email, phoneNumber, studentNumber } = req.body;

//     const password = req.body.password;
//     const password_hashed = await bcryptjs.hash(password, saltRounds);

//     console.log(password_hashed)


//     const check = await db.promise().query(`SELECT email FROM users WHERE email = '${email}' `)

//     if(check[0].length > 0) {
//         return res.send("Existing Email")
//     }


//     try {
//         await db.promise().query(`INSERT INTO users(fullname, email, password, phoneNumber, studentNumber) VALUES('${fullname}', '${email}', '${password_hashed}', '${phoneNumber}', '${studentNumber}' )`)
//         res.status(200).send("Register Successfully");
//     }
//     catch(err) {
//         res.status(400)
//     }
    

// })



router.post('/signin', async(req, res) => {
    const {email, password} = req.body;

    
   
    try {

        if(email === 'cvsu@cvsu.edu.ph' && password === 'cvsuPassword') {
            const token = jwt.sign({ email }, 'MY_MEHMAPP_KEY')
            res.status(201).send({token: token});
        }

        else {
            res.status(400).send({error: "Invalid Email or Password"})
        }

    }
        catch(err) {
            return err;
        }



})



router.get('/getUser', async(req, res) => {
    const { user_id } = req.body

    const user = await db.promise().query(` SELECT fullname FROM users WHERE id = '${user_id}' `)
    res.status(200).send(user[0][0])

})



module.exports = router;