const express = require('express');
const pool = require('./db');
const app = express();
const port = 5000;
var cors = require('cors'); //

app.use(cors()); //
app.use(express.json()); //


//for demodb_dk
app.get('/persons', async (req, res)=>{
    let conn;
    try{
        conn = await pool.getConnection();

        var query = "select * from persons";

        var rows = await conn.query(query);

        res.send(rows);
        console.log(rows);
    } catch(err){
        throw err;
    } finally {
        if (conn) return conn.release();
    }
});

app.listen(port, () => console.log(`Listening on port ${port}`));