const express = require('express')
const cors = require('cors')
const AuthRoutes = require('./src/routes/AuthRoutes')
const scheduleRoutes = require('./src/routes/scheduleRoutes')
const formRoutes = require('./src/routes/formRoutes')
const jwt = require('jsonwebtoken')

const app = express();
let port = process.env.PORT || 8080;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/auth', AuthRoutes)
app.use('/schedule', scheduleRoutes);
app.use('/form', formRoutes);



app.get('/', (req, res) => {
    res.send("Yoww")
})





app.listen(port, () => {
    console.log(`Listening to port: ${port}`)
})