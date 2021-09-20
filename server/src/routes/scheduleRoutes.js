const { Router } = require('express');
const router= Router();
const db = require('../db/database')

router.post('/add', async(req,res) => {
    const { user_id, date, time, contact_number } = req.body;
    

    if(user_id, date, time, contact_number) {
        try {
            schedule_check = await db.promise().query(`SELECT * FROM appointment WHERE date = '${date}' && time = '${time}' `);
            if(schedule_check[0].length > 0) {
                res.status(400).send("Schedule not available");
            }
            else {
                await db.promise().query(`INSERT INTO appointment(user_id, date, time, contact_number, status) VALUES('${user_id}', '${date}', '${time}', '${contact_number}', '${'Waiting'}' ) `)
                res.status(201).send("Schedule Added!")
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
        const selected = await db.promise().query(`SELECT * FROM appointment WHERE date = '${date}' `)
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

    const { user_id, date, time, contact_number} = req.body;
    const app_id = req.params.apointment_id

    try {

        await db.promise().query(`DELETE * FROM appointment WHERE time = '${time}' && date = '${date}' `)

     
        
            await db.promise().query(`UPDATE appointment SET user_id = '${user_id}', date = '${date}', time = '${time}', contact_number = '${contact_number}' WHERE appointment_id = '${app_id}' `)
            res.status(200).send("Updated Successfully!")
        

    }
    catch(err) {
        res.send(err);
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