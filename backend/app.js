const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();

const dbconfig = require('./dbconfig/dbconfig');
dbconfig.dbconnect();

app.use(cors());
app.use(express.json());

const courseroute = require('./routes/courseroute');

app.use('/api/v1',courseroute);

const port = process.env.port;

app.listen(port,()=>{
console.log(`Server running on http://localhost:${port}`);
});