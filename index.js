require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express(); 

// configurar CORS
app.use(cors());

// Base de datos
dbConnection();


console.log(process.env)

// Rutas

app.get('/', (req, res) => {

    res.status(400).json({
        ok: true,
        msg: 'Hola Mundo'
    })

});

app.listen( process.env.PORT, () => {
    console.log('servidor corriendo en puerto ' + process.env.PORT);
})


/* 
mongodb+srv://mean_user:N0cQkkGaViHjoYIv@cluster0.pajik5h.mongodb.net/hospitaldb
N0cQkkGaViHjoYIv
mean_user */