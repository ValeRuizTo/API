const express = require('express');
const app = express();
const PORT = 8085;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`It is alive on http://localhost:${PORT}`)
);

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'one',
        size: 'large'
    })
});


app.post('/tshirt/:id', (req, res) => { 

    const { id } = req.params;

 
    res.send({
        tshirt: `one with your ID of ${id}`,
    });
});

module.exports = app;
