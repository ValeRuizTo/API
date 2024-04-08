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
    res.send("Im working");
});


app.post('/tshirt/:id', (req, res) => { 

    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message:'we need a logo' })
    }

    res.send({
        tshirt: `one with your ${logo} and ID of ${id}`,
    });
});

module.exports = app;
