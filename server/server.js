require('dotenv').config()
const express = require('express')
const cors = require('cors')
const massive = require('massive')

const app = express()

// Deconstruction .env
const { SERVER_PORT, CONNECTION_STRING } = process.env

// Connect to Database
massive({ connectionString: CONNECTION_STRING }).then(db => {
    app.set('db', db)
    console.log('database connected')
})


// import middleware
const bodyParser=require('body-parser');

// Top level middleware
app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json())

// Controller Imports
// Endpoints.
//// Test EP
app.get('/api/test', (req, res, next)=>{
    const db = req.app.get('db')
    db.s1_shelves.find({
        name: 'Shelf A'
    }).then(dbRes=>{
        res.status(200).send(dbRes)
    })
})

////
app.get('/api/shelf/:id', (req, res)=>{
    const db = req.app.get('db')
    db.get_shelf([req.params.id]).then(dbRes=>{
        res.status(200).send(dbRes)
    })
})
app.get('/api/bin/:id', (req, res)=>{
    const db = req.app.get('db')
    db.get_bin([req.params.id]).then(dbRes=>{
        res.status(200).send(dbRes)
    })
})
app.put('/api/bin/:id', (req, res)=>{
    const db = req.app.get('db')
    db.edit_bin([req.params.id, req.body.name, req.body.price]).then(dbRes=>{
        res.status(200).send(dbRes)
    })
})
app.delete('/api/bin/:id', (req, res)=>{
    const db = req.app.get('db')
    db.delete_bin([req.params.id]).then(dbRes=>{
        res.status(200).send()
    })
})
app.post('/api/bin/:id', (req, res)=>{
    const db = req.app.get('db')
    const id = req.params.id*1
    const {shelf_id , bin , name, price, image} = req.body
    db.add_bin([id, bin, shelf_id , name, price, image]).then(dbRes=>{
        res.status(200).send(dbRes)
    })
})


app.listen(SERVER_PORT, ()=>{console.log('Rocking on port: '+SERVER_PORT)})