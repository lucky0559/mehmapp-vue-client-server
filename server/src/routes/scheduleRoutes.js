const { Router } = require('express');
const router= Router();
const db = require('../db/database')

router.post('/add', async(req,res) => {
    const { user_id, date, time } = req.body;
    

    if(user_id, date, time) {
        try {
            schedule_check = await db.promise().query(`SELECT * FROM appointment WHERE date = '${date}' && time = '${time}' `);
            if(schedule_check[0].length > 0) {
                res.status(400).send({msg:"Schedule not available"});
            }
            else {

                try {
                    const phoneNumber = await db.promise().query(`SELECT phoneNumber FROM users WHERE id = '${user_id}' `)

                    await db.promise().query(`INSERT INTO appointment(user_id, date, time, contact_number, status) VALUES('${user_id}', '${date}', '${time}', '${phoneNumber[0][0].phoneNumber}', '${'Waiting'}' ) `)
                    res.status(201).send({msg:"Schedule Added!", contact_number:`${phoneNumber[0][0].phoneNumber}`})
                }

                catch(err) {
                    res.status(400).send({msg:"Invalid User ID"});
                }

                
            }
        }
        catch(err) {
            console.log(err)
        }
    }
    else {
        res.status(400).send("Incomplete Field");
    }

})


// router.get('/getAll', async(req,res) => {
//     try {
//         const schedule = await db.promise().query(`SELECT * FROM appointment`);
//         res.status(200).send(schedule[0]);
//     }
//     catch(err) {
//         res.status(400).send({msg: "Something Went Wrong"});
//     }
        
// })


router.get('/getDate/:date', async(req,res) => {
    const date = req.params.date
    
    try{
        const selected = await db.promise().query(`SELECT * FROM appointment WHERE date = '${date}' ORDER BY CASE WHEN time = '8:00AM - 9:00AM' THEN 0 WHEN time = '9:00AM - 10:00PM' THEN 1 WHEN time = '10:00AM - 11:00AM' THEN 2 WHEN time = '11:00AM - 12:00PM' THEN 3 WHEN time = '1:00PM - 2:00PM' THEN 4 WHEN time = '2:00PM - 3:00PM' THEN 5 WHEN time = '3:00PM - 4:00PM' THEN 6 WHEN time = '4:00PM - 5:00PM' THEN 7 END `)

        // console.log(selected[0])
        res.status(200).send(selected[0]);
    }
    catch(err) {
        res.status(400).send(err)
    }

})



router.delete('/delete/:appointment_id', async(req,res) => {
    const app_id = req.params.appointment_id;

    try {
        await db.promise().query(`DELETE FROM appointment WHERE appointment_id = '${app_id}' `)
            res.status(201).send("Deleted Schedule");
        
    }
    catch(err) {
        res.status(404).send(err);
    }

})


router.put('/edit/:apointment_id', async(req,res) => {

    const { user_id } = req.body;
    const app_id = req.params.apointment_id

    if(user_id.length <= 0) {
        res.status(400).send({msg:"Empty Field"});
    }

    try {

        // await db.promise().query(`DELETE * FROM appointment WHERE time = '${time}' && date = '${date}' `)

            const phoneNumber = await db.promise().query(`SELECT phoneNumber FROM users WHERE id = '${user_id}' `)
        
            await db.promise().query(`UPDATE appointment SET user_id = '${user_id}', contact_number = '${phoneNumber[0][0].phoneNumber}' WHERE appointment_id = '${app_id}' `)
            res.status(200).send("Updated Successfully!")
        
            
        

    }
    catch(err) {
        res.status(400).send({msg:"Invalid User ID"});
    }

    
})




router.put('/editStatus/:apointment_id', async(req,res) => {

    const { status } = req.body;
    const app_id = req.params.apointment_id

    try {
            await db.promise().query(`UPDATE appointment SET status = '${status}' WHERE appointment_id = '${app_id}' `)
            res.status(200).send("Updated Successfully!")
        
    }
    catch(err) {
        res.send(err);
    }

    
})


// router.get('/idSchedule/:date', async(req,res) => {

//     const {date} = req.body

//     try {
//         const schedule = await db.promise().query(`SELECT * FROM appointment WHERE date = '${date}' `);
//         res.status(200).send(schedule[0]);
//     }
//     catch(err) {
//         res.status(400).send(err);
//     }
        
// })



module.exports = router;