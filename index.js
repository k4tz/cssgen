const express = require('express');

const app = express();

app.get('/',(req,res) => { res.send('TEST API') });

const port = process.env.PORT || 8000;

app.listen(port,() => { console.log(`SERVER RUNNING ON ${port}`) });